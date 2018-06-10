using UnityEngine;
using System.Collections;

public sealed class PatternGen_Controller : BaseController
{
	override public void FadeIn() {
		baseScreenData.CanvasGO.SetActive(true);

//		Refs.I.GetScreenData<_BASE_ScreenData>(ScreenHandler.Screens._BASE).UIData.Element.verticalNormalizedPosition = 1.0f;
	}

	public void SetDisplayText(string text)
	{
//		Refs.I.GetScreenData<_BASE_ScreenData>(ScreenHandler.Screens._BASE).UIData.Element.text = text;
	}
}
