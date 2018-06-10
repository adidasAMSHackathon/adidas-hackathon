using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class ProductDetail_ScreenData : BaseScreenData
{
	public ProductDetail_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer
	{
		public CanvasGroup Overlay;
		public GameObject AdidasKey;
		public GameObject KeyDone;
	}
	public UIDataContainer UIData;
}

public class ProductDetail_DataHandler : BaseDataHandler
{
	[SerializeField] CanvasGroup Overlay;

	[SerializeField] GameObject AdidasKey;
	[SerializeField] GameObject KeyDone;
	
	void Start()
	{
		ProductDetail_ScreenData data = new ProductDetail_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.UIData.Overlay = Overlay;
		data.UIData.AdidasKey = AdidasKey;
		data.UIData.KeyDone = KeyDone;

		data.BaseController = gameObject.AddComponent<ProductDetail_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

//		data.UIData.EulaGO = data.CanvasT.GetChild(0).gameObject;
//		data.UIData.EulaGO.SetActive(false);

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.ProductDetail, data);
	}
}
