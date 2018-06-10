using UnityEngine;
using System.Collections;

public sealed class ProductCustomize_Interaction : MonoBehaviour
{
	public void Close()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.ProductDetail);
	}
}
