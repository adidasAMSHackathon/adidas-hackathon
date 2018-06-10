using UnityEngine;
using UnityEditor;
using System.Text;

[InitializeOnLoad]
public class GenerateSceneMenutitems
{
	static GenerateSceneMenutitems()
	{
		EditorBuildSettingsScene[] scenes = EditorBuildSettings.scenes;

		// the generated filepath
		string scriptFile = "Assets/Scripts/Editor/___GeneratedScenePickerMenuItems.cs";

		// The class string
		StringBuilder sb = new StringBuilder();
		sb.AppendLine("// This class is Auto-Generated");
		sb.AppendLine("using UnityEngine;");
		sb.AppendLine("using UnityEditor;");
		sb.AppendLine("using UnityEditor.SceneManagement;");
		sb.AppendLine("");
		sb.AppendLine("public static class ___GeneratedScenePickerMenuItems {");
		sb.AppendLine("");

		// loops though the array and generates the menu items
		for(int i = 0; i < scenes.Length; i++)
		{
			sb.AppendLine("\t[MenuItem(\"Tools/Scene Picker/" + scenes[i].path.Replace('/', ' ') + "\")]");
			sb.AppendLine("\tprivate static void MenuItem" + i.ToString() + "() {");
			sb.AppendLine("\t\tEditorSceneManager.OpenScene(\"" + scenes[i].path + "\");");
			sb.AppendLine("\t}");
			sb.AppendLine("");
			
			
		}
		
		sb.AppendLine("");
		sb.AppendLine("}");

		// writes the class and imports it so it is visible in the Project window
		System.IO.File.WriteAllText(scriptFile, sb.ToString(), System.Text.Encoding.UTF8);
	}
}
