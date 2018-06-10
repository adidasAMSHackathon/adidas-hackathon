using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;

public class PlayMain {

	public class MenuItems	{

		[MenuItem("Play/Run Main")]
		private static void RunMain() {

			try {
				System.IO.File.WriteAllText(
					Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene", 
					EditorSceneManager.GetActiveScene().path);

				EditorSceneManager.OpenScene("Assets/Main.unity", OpenSceneMode.Single);

				EditorApplication.ExecuteMenuItem("Edit/Play");
			} catch(System.Exception e) {
				
			}

		}
	}
}

[InitializeOnLoad]
public static class PlayStateNotifier
{

	static PlayStateNotifier()
	{
		EditorApplication.playmodeStateChanged += ModeChanged;
	}

	static void ModeChanged ()
	{
		if (!EditorApplication.isPlayingOrWillChangePlaymode &&
			!EditorApplication.isPlaying &&
			System.IO.File.Exists(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene"))
		{
			string lastScene = System.IO.File.ReadAllText(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene");

			if (lastScene.Length > 0) {
				EditorSceneManager.OpenScene(lastScene, OpenSceneMode.Single);
			}

			System.IO.File.Delete(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene");
		}
	}
}