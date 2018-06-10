using UnityEngine;
using System.Collections;

public sealed class Menu_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.Menu
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		// ScreenHandler.Screens.BottomNav,
		ScreenHandler.Screens.ARVideoFeed
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<Menu_Controller>(ScreenHandler.Screens.Menu).FadeIn();

		Refs.I.GoBackState = StateHandler.States.Menu;
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<Menu_Controller>(ScreenHandler.Screens.Menu).FadeOut();
	}
}
