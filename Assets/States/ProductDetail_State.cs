using UnityEngine;
using System.Collections;

public sealed class ProductDetail_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{
		ScreenHandler.Screens.ProductDetail
	};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{
		// ScreenHandler.Screens.BottomNav,
		ScreenHandler.Screens.ARVideoFeed,
		ScreenHandler.Screens.ProductRenderer
	};

	override public void Setup()
	{}

	override public void FirstRun() {

		Refs.I.GetSreenController<ProductDetail_Controller>(ScreenHandler.Screens.ProductDetail).FadeIn();

		Refs.I.GoBackState = StateHandler.States.ProductDetail;
	}

	override public void Exit() {
//		Debug.Log("Menu_State Exit");

		Refs.I.GetSreenController<ProductDetail_Controller>(ScreenHandler.Screens.ProductDetail).FadeOut();
	}
}
