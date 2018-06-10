using UnityEngine;
using System.Collections;

public sealed class CaptureImage_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.CaptureImage
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		// ScreenHandler.Screens.BottomNav,
		ScreenHandler.Screens.ARVideoFeed,
		ScreenHandler.Screens.PatternGen
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<CaptureImage_Controller>(ScreenHandler.Screens.CaptureImage).FadeIn();

		Refs.I.GoBackState = StateHandler.States.CaptureImage;
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<CaptureImage_Controller>(ScreenHandler.Screens.CaptureImage).FadeOut();
	}
}
