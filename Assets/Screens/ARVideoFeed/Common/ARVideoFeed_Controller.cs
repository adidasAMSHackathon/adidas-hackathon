using UnityEngine;
using System.Collections;

public sealed class ARVideoFeed_Controller : BaseController
{
	override public void FadeIn() {
		baseScreenData.CanvasGO.SetActive(true);
	}

	public void PlaceShoe()
	{
		((ARVideoFeed_ScreenData)baseScreenData).focusSquare.Place();
	}

	public void ShowAROverlays()
	{
		((ARVideoFeed_ScreenData)baseScreenData).toggleAROverlays.Show();
	}

	public void HideAROverlays()
	{
		((ARVideoFeed_ScreenData)baseScreenData).toggleAROverlays.Hide();
	}
}
