using UnityEngine;
using System.Collections;

public sealed class ProductCustomize_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.ProductCustomize
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		ScreenHandler.Screens.ARVideoFeed,
		ScreenHandler.Screens.ProductRenderer
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<ProductCustomize_Controller>(ScreenHandler.Screens.ProductCustomize).FadeIn();

		Refs.I.GoBackState = StateHandler.States.ProductCustomize;
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<ProductCustomize_Controller>(ScreenHandler.Screens.ProductCustomize).FadeOut();
	}
}
