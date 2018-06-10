using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class BottomNav_ScreenData : BaseScreenData
{
	public BottomNav_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class BottomNav_DataHandler : BaseDataHandler
{
	void Start()
	{
		BottomNav_ScreenData data = new BottomNav_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<BottomNav_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.BottomNav, data);
	}
}
