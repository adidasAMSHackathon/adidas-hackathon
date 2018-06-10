using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class ARTryOut_ScreenData : BaseScreenData
{
	public ARTryOut_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class ARTryOut_DataHandler : BaseDataHandler
{
	void Start()
	{
		ARTryOut_ScreenData data = new ARTryOut_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<ARTryOut_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.ARTryOut, data);
	}
}
