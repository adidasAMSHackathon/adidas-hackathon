using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class BaseDataHandler : MonoBehaviour {

	protected void SetCanvasReferences(ref BaseScreenData screenData, bool setCanvasCamera = true) {
		screenData.CanvasT = ScreenUtilities.GetScreenCanvasTransform(gameObject);
		screenData.CanvasGO = screenData.CanvasT.gameObject;
		screenData.Canvas = screenData.CanvasGO.GetComponent<Canvas>();

		if (setCanvasCamera) {
			screenData.Canvas.renderMode = RenderMode.ScreenSpaceCamera;
			screenData.Canvas.worldCamera = Refs.I.Camera;
		}

		ScreenUtilities.DisableScreenCamera(screenData.CanvasGO);
	}
}