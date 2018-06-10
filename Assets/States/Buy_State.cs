using UnityEngine;
using System.Collections;

public sealed class Buy_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.Buy
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		// ScreenHandler.Screens.BottomNav,
		ScreenHandler.Screens.ARVideoFeed
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<Buy_Controller>(ScreenHandler.Screens.Buy).FadeIn();

		Refs.I.GoBackState = StateHandler.States.Buy;
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<Menu_Controller>(ScreenHandler.Screens.Buy).FadeOut();
	}
}
