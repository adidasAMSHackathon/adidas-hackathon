using System.Collections;
using UnityEngine;

[CreateAssetMenu(fileName = "DisplayStringsContainer", menuName = "Containers/Display Strings", order = 1)]
public class DisplayStringsContainer : ScriptableObject
{
	[System.Serializable]
	public class StartScreenStrings
	{
		public string Start = "Start";
	}

	public StartScreenStrings StartScreen;
}
