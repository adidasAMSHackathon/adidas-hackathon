using UnityEngine;
using System.Collections;

public sealed class ARTryOut_Interaction : MonoBehaviour
{
	public void OnPlace()
	{
		Refs.I.ScreenHandler.GetSreenController<ARVideoFeed_Controller>(ScreenHandler.Screens.ARVideoFeed).PlaceShoe();
	}

	public void OnClose()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.ProductDetail);
	}
}
