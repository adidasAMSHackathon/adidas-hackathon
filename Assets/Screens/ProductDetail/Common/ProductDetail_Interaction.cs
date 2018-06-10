using UnityEngine;
using System.Collections;

public sealed class ProductDetail_Interaction : MonoBehaviour
{
	public void OnTryOn()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.ARTryOut);
	}

	public void OnChange()
	{
		StartCoroutine(RunKeyAnimation());
	}

	public void OnAddToCart()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.Buy);
	}

	public void OnCustomize()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.ProductCustomize);
	}

	IEnumerator RunKeyAnimation()
	{
		ProductDetail_ScreenData screenData =
			Refs.I.ScreenHandler.GetScreenData<ProductDetail_ScreenData>(ScreenHandler.Screens.ProductDetail);

		float alpha = 0.0f;

		while (alpha < 1.0f) {
			alpha += Time.deltaTime * 3.0f;
			screenData.UIData.Overlay.alpha = alpha;

			yield return null;
		}

		screenData.UIData.AdidasKey.SetActive(false);
		screenData.UIData.KeyDone.SetActive(true);

		yield return new WaitForSeconds(2.0f);

		while (alpha > 0.0f) {
			alpha -= Time.deltaTime * 3.0f;
			screenData.UIData.Overlay.alpha = alpha;

			yield return null;
		}

		screenData.UIData.Overlay.gameObject.SetActive(false);

		yield return new WaitForSeconds(0.5f);

		Refs.I.ScreenHandler.GetSreenController<ProductRenderer_Controller>(ScreenHandler.Screens.ProductRenderer).ChangeShoe();
	}
}
