using UnityEngine;
using System.Collections;

public sealed class ARTryOut_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.ARTryOut
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		// ScreenHandler.Screens.BottomNav,
		ScreenHandler.Screens.ARVideoFeed
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<ARTryOut_Controller>(ScreenHandler.Screens.ARTryOut).FadeIn();

		Refs.I.GoBackState = StateHandler.States.ARTryOut;

		Refs.I.GetSreenController<ARVideoFeed_Controller>(ScreenHandler.Screens.ARVideoFeed).ShowAROverlays();
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<ARVideoFeed_Controller>(ScreenHandler.Screens.ARVideoFeed).Hide();

		Refs.I.GetSreenController<ARTryOut_Controller>(ScreenHandler.Screens.ARTryOut).FadeOut();
	}
}
