using UnityEngine;
using System.Collections;

public sealed class StateHandler : MonoBehaviour
{

	public enum States
	{
		Boot,

		Loading,

		Menu,
		CaptureImage,

		ProductDetail,
		ProductCustomize,

		ARTryOut,

		Buy,

		TOTAL_NUM
	}

	public States CurrentState { get; private set; }
	public States PreviousState { get; private set; }

	BaseState[] states;

	void Start()
	{
		states = new BaseState[(int)States.TOTAL_NUM];

		states[(int)States.Boot] = new Boot_State();
		states[(int)States.Loading] = new Loading_State();

		states[(int)States.Menu] = new Menu_State();
		states[(int)States.CaptureImage] = new CaptureImage_State();
		
		states[(int)States.ProductDetail] = new ProductDetail_State();
		states[(int)States.ProductCustomize] = new ProductCustomize_State();
		
		states[(int)States.ARTryOut] = new ARTryOut_State();

		states[(int)States.Buy] = new Buy_State();

		for (int i = 0; i < states.Length; i++)
		{
			states[i].Setup();
		}

		BackInputSender.OnBack += GoBack;

		GotoState(States.Boot, false);
	}

	public void ScreenDataLoaded()
	{
		for (int i = 0; i < states.Length; i++)
		{
			states[i].SetupWithScreenDataLoaded();
		}

		Refs.I.ScreenHandler.CacheNeededScreensData(states);
	}

	public void GotoState(States newState, bool setScreens = true)
	{
		states[(int)CurrentState].Exit();

		PreviousState = CurrentState;
		CurrentState = newState;

		if (setScreens)
		{
			Refs.I.ScreenHandler.SetScreensForState(CurrentState);
		}

		states[(int)CurrentState].FirstRun();
	}

	void OnApplicationFocus(bool hasFocus)
	{
		if (hasFocus && states?[(int)CurrentState] != null)
		{
			states[(int)CurrentState].OnAppResume();
		}
	}

	public void GoBack()
	{
		if (
			CurrentState != States.Boot &&
			CurrentState != States.Loading
		) {
			GotoState(Refs.I.GoBackState);
		}
	}
}
