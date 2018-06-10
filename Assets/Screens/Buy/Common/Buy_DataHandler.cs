using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class Buy_ScreenData : BaseScreenData
{
	public Buy_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class Buy_DataHandler : BaseDataHandler
{
	void Start()
	{
		Buy_ScreenData data = new Buy_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<Buy_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.Buy, data);
	}
}
