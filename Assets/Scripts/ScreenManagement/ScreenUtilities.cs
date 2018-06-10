using UnityEngine;

public class ScreenUtilities
{
	public static Camera GetScreenCamera(GameObject sceneObject)
	{
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();
		
		for (int i = 0; i < rootObjects.Length; i++)
		{
			if (rootObjects[i].CompareTag(Tags.MainCamera))
			{
				return rootObjects[i].GetComponent<Camera>();
			}
		}
	
		Debug.Assert(false, "no main camera found");
	
		return null;
	}
	
	public static void DisableScreenCamera(GameObject sceneObject)
	{
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();
		
		for (int i = 0; i < rootObjects.Length; i++)
		{
			
			if (rootObjects[i].CompareTag(Tags.MainCamera))
			{
				rootObjects[i].SetActive((false));
				break;
			}
		}
	}
	
	public static RectTransform GetScreenCanvasTransform(GameObject sceneObject)
	{
		GameObject[] rootObjects = sceneObject.scene.GetRootGameObjects();
		
		for (int i = 0; i < rootObjects.Length; i++)
		{
			if (rootObjects[i].CompareTag(Tags.Canvas))
			{
				return (RectTransform)rootObjects[i].transform;
			}
		}
		
		Debug.Assert(false, "no root object with canvas tag found");
		
		return null;
	}
}
