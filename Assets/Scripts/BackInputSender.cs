using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class BackInputSender : MonoBehaviour {

	public static event System.Action OnBack;

	void Update() {
		if (Input.GetKeyDown(KeyCode.Escape)) {
			if (OnBack != null) {
				OnBack();
			}
		}
	}
}
