using UnityEngine;
using System.Collections;

public abstract class BaseState
{
	public abstract ScreenHandler.Screens[] Screens { get; }
	public abstract ScreenHandler.Screens[] SharedScreens { get; }

	public virtual void Setup()
	{}

	public virtual void SetupWithScreenDataLoaded()
	{}

	public virtual void FirstRun()
	{}

	public virtual void OnAppResume()
	{}
	
	public virtual void Exit()
	{}
}
