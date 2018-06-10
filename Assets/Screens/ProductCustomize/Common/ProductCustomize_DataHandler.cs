using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class ProductCustomize_ScreenData : BaseScreenData
{
	public ProductCustomize_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;
}

public class ProductCustomize_DataHandler : BaseDataHandler
{
	void Start()
	{
		ProductCustomize_ScreenData data = new ProductCustomize_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<ProductCustomize_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.ProductCustomize, data);
	}
}
