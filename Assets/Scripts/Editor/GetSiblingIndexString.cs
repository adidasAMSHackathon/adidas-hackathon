using UnityEngine;
using UnityEditor;

public class GetSiblingIndexString {

	public class MenuItems {

		[MenuItem("Tools/GetSiblingIndexString")]
		private static void GetSiblingIndexString() {
			Transform currentT = Selection.activeGameObject.transform;

			string output = string.Empty;

			while (currentT.parent != null) {
				output = output.Insert(0, ".GetChild(" + currentT.GetSiblingIndex().ToString() + ")");

				currentT = currentT.parent;
			}

			Debug.Log(output);

		}
	}
}
