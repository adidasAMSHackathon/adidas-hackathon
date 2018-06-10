using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.SceneManagement;

public class BaseScreenData
{
	[System.NonSerialized] public BaseController BaseController;

	[System.NonSerialized] public RectTransform CanvasT;
	[System.NonSerialized] public Canvas Canvas;
	[System.NonSerialized] public GameObject CanvasGO;

	[System.NonSerialized] public RectTransform DragContainerT;
}

public class ScreenHandler : MonoBehaviour
{
	public enum Screens
	{

		Menu,
		
		CaptureImage,

		ProductDetail,
		ProductCustomize,

		ARTryOut,

		ARVideoFeed,

		BottomNav,
		
		ProductRenderer,

		PatternGen,

		Buy,

		TOTAL_NUM,
		_BASE
	}

	BaseScreenData[] screenData;
	string[] sceneNames;

	bool[] activeScreens;
	bool[] activeSharedScreens;

	bool[,] neededScreens;
	bool[,] neededSharedScreens;

	public void Setup()
	{
		screenData = new BaseScreenData[(int)Screens.TOTAL_NUM];

		sceneNames = new string[(int)Screens.TOTAL_NUM];

		activeScreens = new bool[(int)Screens.TOTAL_NUM];
		activeSharedScreens = new bool[(int)Screens.TOTAL_NUM];

		neededScreens = new bool[(int)StateHandler.States.TOTAL_NUM, (int)Screens.TOTAL_NUM];
		neededSharedScreens = new bool[(int)StateHandler.States.TOTAL_NUM, (int)Screens.TOTAL_NUM];

		for (int i = 0; i < sceneNames.Length; i++) {
			// ignore BASE screen
			if ((Screens)i == Screens._BASE)
				continue;

			activeScreens[i] = false;
			activeSharedScreens[i] = false;

			sceneNames[i] = ((Screens)i).ToString() + "_Scene";
		}
	}

	public void LoadAllScreensAsync(System.Action onFinished = null)
	{
		StartCoroutine((RunLoadScenesAsync(onFinished)));
	}

	public void CacheNeededScreensData(BaseState[] states)
	{
		// screen data
		for (int i = 0, l = (int)StateHandler.States.TOTAL_NUM; i < l; i++)
		{
			for (int j = 0, l2 = (int)Screens.TOTAL_NUM; j < l2; j++)
			{
				neededScreens[i, j] = false;
			}

			for (int j = 0, l2 = states[i].Screens.Length; j < l2; j++)
			{
				neededScreens[i, (int)states[i].Screens[j]] = true;
			}
		}

		// shared screen data
		for (int i = 0, l = (int)StateHandler.States.TOTAL_NUM; i < l; i++)
		{
			for (int j = 0, l2 = (int)Screens.TOTAL_NUM; j < l2; j++)
			{
				neededSharedScreens[i, j] = false;
			}

			for (int j = 0, l2 = states[i].SharedScreens.Length; j < l2; j++)
			{
				neededSharedScreens[i, (int)states[i].SharedScreens[j]] = true;
			}
		}
	}

	public void SetScreenData(Screens screen, BaseScreenData data)
	{
		screenData[(int)screen] = data;


		data.CanvasGO.SetActive(false);
	}


	public void SetScreensForState(StateHandler.States state)
	{
		// toggle main screens
		for (int i = 0, l = (int)Screens.TOTAL_NUM; i < l; i++)
		{
			if (activeScreens[i])
			{
				screenData[i].BaseController.FadeOut();
				activeScreens[i] = false;

				// Debug.Log($"Fade out {(Screens)i}");
			}

			if (neededScreens[(int)state, i])
			{
				screenData[i].BaseController.FadeIn();
				activeScreens[i] = true;

				// Debug.Log($"Fade in {(Screens)i}");
			}
		}

		// set shared screens
		for (int i = 0, l = (int)Screens.TOTAL_NUM; i < l; i++)
		{
			// hide unneeded screen
			if (activeSharedScreens[i] && !neededSharedScreens[(int)state, i])
			{
				screenData[i].BaseController.FadeOut();
				activeSharedScreens[i] = false;

				// Debug.Log($"Fade out shared {(Screens)i}");
			}
			// show needed screen
			else if (!activeSharedScreens[i] && neededSharedScreens[(int)state, i])
			{
				screenData[i].BaseController.FadeIn();
				activeSharedScreens[i] = true;

				Debug.Log($"Fade in shared {(Screens)i}");
			}
		}
	}

	public BaseScreenData GetSreenData(Screens screen)
	{
		Debug.Assert(screenData[(int)screen] != null);

		return screenData[(int)screen];
	}

	public T GetScreenData<T>(Screens screen)
	{
		Debug.Assert(screenData[(int)screen] != null);

		return (T)System.Convert.ChangeType(screenData[(int)screen], typeof(T));
	}

	public T GetSreenController<T>(Screens screen)
	{
		Debug.Assert(screenData[(int)screen] != null);

		return (T)System.Convert.ChangeType(screenData[(int)screen].BaseController, typeof(T));
	}
		
	IEnumerator RunLoadScenesAsync(System.Action onFinished)
	{
		for (int i = 0; i < sceneNames.Length; i++) {
			yield return SceneManager.LoadSceneAsync(sceneNames[i], LoadSceneMode.Additive);
		}

		yield return null;

		Refs.I.StateHandler.ScreenDataLoaded();

		yield return null;

		if (onFinished != null) {
			onFinished();
		}
	}
}
