using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class PatternGen_ScreenData : BaseScreenData
{
	public PatternGen_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class PatternGen_DataHandler : BaseDataHandler
{
	void Start()
	{
		PatternGen_ScreenData data = new PatternGen_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<PatternGen_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.PatternGen, data);
	}
}
