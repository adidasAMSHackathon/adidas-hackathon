using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class _BASE_ScreenData : BaseScreenData
{
	public _BASE_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class _BASE_DataHandler : BaseDataHandler
{
	void Start()
	{
		_BASE_ScreenData data = new _BASE_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<_BASE_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens._BASE, data);
	}
}
