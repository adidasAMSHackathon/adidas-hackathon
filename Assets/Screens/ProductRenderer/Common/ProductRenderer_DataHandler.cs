using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class ProductRenderer_ScreenData : BaseScreenData
{
	public ProductRenderer_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
//		public GameObject EulaGO;
	}
	public UIDataContainer UIData;

	public GameObject BaseShoe;
	public GameObject ChangedShoe;
}

public class ProductRenderer_DataHandler : BaseDataHandler
{
	[SerializeField] GameObject BaseShoe;
	[SerializeField] GameObject ChangedShoe;


	void Start()
	{
		ProductRenderer_ScreenData data = new ProductRenderer_ScreenData();
		Common.DisableScreenCamera(gameObject);

		data.BaseShoe = BaseShoe;
		data.ChangedShoe = ChangedShoe;

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<ProductRenderer_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.ProductRenderer, data);
	}
}
