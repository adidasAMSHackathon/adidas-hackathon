using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class CaptureImage_ScreenData : BaseScreenData
{
	public CaptureImage_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
		public GameObject ProcessingContainer;
		public RectTransform ProcessingProgressBarT;
	}
	public UIDataContainer UIData;
}

public class CaptureImage_DataHandler : BaseDataHandler
{
	[SerializeField] GameObject ProcessingContainer;
	[SerializeField] RectTransform ProcessingProgressBarT;

	void Start()
	{
		CaptureImage_ScreenData data = new CaptureImage_ScreenData();
		Common.DisableScreenCamera(gameObject);

		data.UIData.ProcessingContainer = ProcessingContainer;
		data.UIData.ProcessingProgressBarT = ProcessingProgressBarT;

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<CaptureImage_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.CaptureImage, data);
	}
}
