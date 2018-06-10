using UnityEngine;
using System.Collections;

public class BaseController : MonoBehaviour {

	public BaseScreenData baseScreenData;

	public virtual void Hide() {
		baseScreenData.CanvasGO.SetActive(false);
	}

	public virtual void FadeIn() {
		baseScreenData.CanvasGO.SetActive(true);
	}

	public virtual void FadeOut() {
		baseScreenData.CanvasGO.SetActive(false);
	}
}
