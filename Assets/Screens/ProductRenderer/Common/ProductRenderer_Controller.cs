using UnityEngine;
using System.Collections;

public sealed class ProductRenderer_Controller : BaseController
{
	override public void FadeIn() {
		baseScreenData.CanvasGO.SetActive(true);

//		Refs.I.GetScreenData<_BASE_ScreenData>(ScreenHandler.Screens._BASE).UIData.Element.verticalNormalizedPosition = 1.0f;
	}

	public void ChangeShoe()
	{
		ProductRenderer_ScreenData screenData =
			Refs.I.GetScreenData<ProductRenderer_ScreenData>(ScreenHandler.Screens.ProductRenderer);

		screenData.BaseShoe.SetActive(false);
		screenData.ChangedShoe.SetActive(true);
	}
}
