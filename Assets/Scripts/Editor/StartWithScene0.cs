using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;

[InitializeOnLoad]
public static class StartWithScene0
{

	static StartWithScene0()
	{
		EditorApplication.playmodeStateChanged += () => {
			if (!EditorApplication.isPlayingOrWillChangePlaymode &&
				!EditorApplication.isPlaying &&
				System.IO.File.Exists(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene"))
			{
				string lastScene = System.IO.File.ReadAllText(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene");

				if (lastScene.Length > 0)
				{
					EditorSceneManager.OpenScene(lastScene, OpenSceneMode.Single);
				}

				System.IO.File.Delete(Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene");
			}
			else if (
				EditorApplication.isPlayingOrWillChangePlaymode &&
				!EditorApplication.isPlaying
			) {

				if (EditorBuildSettings.scenes[0] == null)
					return;

				try
				{
					System.IO.File.WriteAllText(
						Application.dataPath + System.IO.Path.DirectorySeparatorChar + ".lastScene", 
						EditorSceneManager.GetActiveScene().path);

					EditorSceneManager.OpenScene(EditorBuildSettings.scenes[0].path, OpenSceneMode.Single);
				}
				catch(System.Exception e)
				{
					Debug.Log(e);
				}
			}
		};
	}
}