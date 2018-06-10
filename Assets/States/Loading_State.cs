using UnityEngine;
using System.Collections;

public sealed class Loading_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{};

	override public void Setup() {}

	override public void FirstRun()
	{
		Refs.I.ScreenHandler.LoadAllScreensAsync(() => {
			Refs.I.StateHandler.GotoState(StateHandler.States.Menu);
		});
	}

	override public void Exit() {}
}
