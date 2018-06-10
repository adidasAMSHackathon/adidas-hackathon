using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class ARVideoFeed_ScreenData : BaseScreenData
{
	public ARVideoFeed_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;

	public FocusSquare focusSquare;
	public ToggleAROverlays toggleAROverlays;

}

public class ARVideoFeed_DataHandler : BaseDataHandler
{
	[SerializeField] FocusSquare focusSquare;
	[SerializeField] ToggleAROverlays toggleAROverlays;
	
	void Start()
	{
		ARVideoFeed_ScreenData data = new ARVideoFeed_ScreenData();
		Common.DisableScreenCamera(gameObject);

		data.focusSquare = focusSquare;
		data.toggleAROverlays = toggleAROverlays;

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<ARVideoFeed_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.ARVideoFeed, data);
	}
}
