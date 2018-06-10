using UnityEngine;
using System.Collections;

public sealed class Menu_Interaction : MonoBehaviour
{
	public void OnStartPressed()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.CaptureImage);
	}
}