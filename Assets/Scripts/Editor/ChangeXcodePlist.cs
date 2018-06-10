using UnityEditor;
using UnityEditor.Callbacks;
using System.IO;

#if UNITY_IOS
using UnityEditor.iOS.Xcode;
#endif

public class XCodeInfoPlistSetter
{

	#if UNITY_IOS
	[PostProcessBuild] 
	public static void ChangeXcodePlist(BuildTarget buildTarget, string pathToBuiltProject)
	{
		// if (buildTarget == BuildTarget.iOS)
		// {
		// 	// Get plist
		// 	string plistPath = pathToBuiltProject + "/Info.plist";
		// 	PlistDocument plist = new PlistDocument();
		// 	plist.ReadFromString(File.ReadAllText(plistPath));

		// 	// Get root
		// 	PlistElementDict rootDict = plist.root;

		// 	// set ITSAppUsesNonExemptEncryption
		// 	rootDict.SetBoolean("ITSAppUsesNonExemptEncryption", false);

		// 	rootDict.SetString("NSPhotoLibraryUsageDescription", "Take picture");

		// 	// Write to file
		// 	File.WriteAllText(plistPath, plist.WriteToString());
		// }
	}
	#endif
}