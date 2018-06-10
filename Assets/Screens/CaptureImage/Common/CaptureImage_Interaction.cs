using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public sealed class CaptureImage_Interaction : MonoBehaviour
{
	public void CaptureImage()
	{
		Refs.I.CapturedTexture = new Texture2D(2048, 2048);

		RenderTexture.active = Refs.I.Pattern;
		Refs.I.CapturedTexture.ReadPixels(new Rect(0, 0, 2048, 2048), 0, 0);
 		Refs.I.CapturedTexture.Apply();

		Refs.I.Materials.ShoeOuter.SetTexture(ShaderProperties._MainTex, Refs.I.CapturedTexture);

		RenderTexture.active = Refs.I.ARFeed;
		Texture2D arTexture = new Texture2D(700, 700);
		arTexture.ReadPixels(new Rect(25, 292, 700, 700), 0, 0);
 		arTexture.Apply();

		StartCoroutine(RunApiRequest(
			arTexture.EncodeToJPG(50),
			(string result) => {
				CloudVisionData data = CloudVisionData.CreateFromJSON(result);
				CloudVisionData.ParseColors(data);
				Debug.Log(data.UnpackedColors[0]);

				Refs.I.Materials.ShoeHeel.SetColor(ShaderProperties._Color, data.UnpackedColors[0]);

				// Debug.Log(data.UnpackedColors[0]);

				Refs.I.StateHandler.GotoState(StateHandler.States.ProductDetail);
			}
		));
	}

	public void Close()
	{
		Refs.I.StateHandler.GotoState(StateHandler.States.Menu);
	}

	IEnumerator RunApiRequest(
		byte[] jpgBytes,
		System.Action<string> onFinished
	) {
		WWWForm form = new WWWForm();
		form.AddField("bla", "bla");

		UnityWebRequest wwwSignin = UnityWebRequest.Post("https://safe-tundra-25778.herokuapp.com/analyse", form);

		UploadHandlerRaw upHandler = new UploadHandlerRaw(jpgBytes);
		upHandler.contentType = "image/jpeg";
		wwwSignin.uploadHandler = upHandler;

		yield return wwwSignin.Send();

		if (wwwSignin.isNetworkError)
		{
			Debug.Log(wwwSignin.error);
		}
		else
		{
			string data = wwwSignin.downloadHandler.text;

			Debug.Log(data);

			onFinished(data);
		}
	}
}
