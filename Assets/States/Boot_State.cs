using UnityEngine;
using System.Collections;

public sealed class Boot_State : BaseState
{
	public override ScreenHandler.Screens[] Screens { get; } = new ScreenHandler.Screens[]
	{};
	public override ScreenHandler.Screens[] SharedScreens { get; } = new ScreenHandler.Screens[] 
	{};

	override public void Setup() {}

	override public void FirstRun()
	{
		Refs.I.Setup();

		Refs.I.StateHandler.GotoState(StateHandler.States.Loading);
	}

	override public void Exit() {}
}
