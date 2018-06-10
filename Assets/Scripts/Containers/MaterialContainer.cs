using UnityEngine;
using System.Collections;

[CreateAssetMenu(fileName = "MaterialContainer", menuName = "Containers/Materials", order = 1)]
public class MaterialContainer : ScriptableObject
{
	public Material Pattern;

	[Space]
	
	public Material ShoeOuter;
	public Material ShoeHeel;
}