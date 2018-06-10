using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public sealed class Menu_ScreenData : BaseScreenData
{
	public Menu_ScreenData()
	{
		UIData = new UIDataContainer();
	}

	public class UIDataContainer{}

	public UIDataContainer UIData;
}

public class Menu_DataHandler : BaseDataHandler
{
	void Start() {
		Menu_ScreenData data = new Menu_ScreenData();
		Common.DisableScreenCamera(gameObject);

		BaseScreenData baseData = (BaseScreenData)data;
		SetCanvasReferences(ref baseData);

		data.BaseController = gameObject.AddComponent<Menu_Controller>();
		data.BaseController.baseScreenData = (BaseScreenData)data;

		Refs.I.ScreenHandler.SetScreenData(ScreenHandler.Screens.Menu, data);
	}
}
