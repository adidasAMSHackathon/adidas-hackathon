using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ToggleAROverlays : MonoBehaviour {

	[SerializeField] MeshRenderer[] Overlays;

	void Start() {
		Hide();
	}

	public void Show() {
		for (int  i = 0; i < Overlays.Length; i++) {
			Overlays[i].enabled = true;
		}
	}

	public void Hide() {
		for (int  i = 0; i < Overlays.Length; i++) {
			Overlays[i].enabled = false;
		}
	}
}
