using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class Common {
	public static string Log (params object [] data) {
		System.Text.StringBuilder sb = new System.Text.StringBuilder();

		for (int i = 0; i < data.Length; i++) {
			sb.Append(data[i].ToString());
			sb.Append(", ");
		}

		return sb.ToString();
	}

	public static float KeepDegreeAnlgeInPositiveRange(float angle) {
		angle %= 360.0f;

		if (angle < 0.0f) {
			angle = 360.0f - angle;
		}

		return angle;
	}

	public static float KeepDegreeAnlgeInNegPosRange(float angle) {
		angle += 180.0f;

		angle %= 360.0f;

		if (angle < 0.0f) {
			angle = 360.0f - angle;
		}

		angle -= 180.0f;

		return angle;
	}

	public static float DegreeAngleDifference( float angle1, float angle2 ) {
		float diff = (angle2 - angle1 + 180.0f) % 360.0f - 180.0f;
		return diff < -180.0f ? diff + 360.0f : diff;
	}

	public static Camera GetScreenCamera(GameObject sceneObject) {
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();

		for (int i = 0; i < rootObjects.Length; i++) {

			if (rootObjects[i].CompareTag(Tags.MainCamera)) {
				return rootObjects[i].GetComponent<Camera>();
			}
		}

		Debug.Assert(false, "no main camera found");

		return null;
	}

	public static void DisableScreenCamera(GameObject sceneObject) {
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();

		for (int i = 0; i < rootObjects.Length; i++) {

			if (rootObjects[i].CompareTag(Tags.MainCamera)) {
				rootObjects[i].SetActive((false));
				break;
			}
		}
	}

	public static RectTransform GetScreenCanvasTransform(GameObject sceneObject) {
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();

		for (int i = 0; i < rootObjects.Length; i++) {
			if (rootObjects[i].CompareTag(Tags.Canvas)) {
				return (RectTransform)rootObjects[i].transform;
			}
		}

		Debug.Assert(false, "no root object with canvas tag found");

		return null;
	}

	public static Coroutine LerpAnimation(
		MonoBehaviour parent,
		float value,
		float goal,
		float speed,
		System.Action<float> onUpdate,
		float minDistance = 0.001f,
		System.Action onFinished = null
	) {
		return parent.StartCoroutine(RunLerpAnimation(
			value, goal, speed, onUpdate, minDistance, onFinished
		));
	}

	static IEnumerator RunLerpAnimation(
		float value,
		float goal,
		float speed,
		System.Action<float> onUpdate,
		float minDistance,
		System.Action onFinished
	) {
		onUpdate(value);

		if (Mathf.Abs(value - goal) > minDistance) {
			value = Mathf.Lerp(value, goal, Time.deltaTime * speed);
			onUpdate(value);

			yield return null;
		}

		onUpdate(goal);

		if (onFinished != null) {
			onFinished();
		}
	}
}
