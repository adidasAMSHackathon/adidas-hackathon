using UnityEngine;
using UnityEngine.EventSystems;

public class AdjustPixelDragThreshold : MonoBehaviour {

	[SerializeField] private int referenceDPI = 100;
	[SerializeField] private float referencePixelDrag = 8.0f;

	// Use this for initialization
	void Awake () {
		EventSystem eventSystem = gameObject.GetComponent<EventSystem>();

		eventSystem.pixelDragThreshold = 
			Mathf.RoundToInt(
				Mathf.Max(
					referencePixelDrag,
					Screen.dpi / referenceDPI*referencePixelDrag
		));
			
	}

}
