using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;

#if UNITY_IOS
using UnityEditor.iOS.Xcode;
#endif

public class XcodeProjectMod {

	#if UNITY_IOS
//	[PostProcessBuild] 
//	public static void ChangeXcodeProject(BuildTarget buildTarget, string path) {
//		if(buildTarget == BuildTarget.iOS)
//		{
//			string projectPath = path + "/Unity-iPhone.xcodeproj/project.pbxproj";
//
//			PBXProject pbxProject = new PBXProject();
//
//			pbxProject.ReadFromFile(projectPath);
//
//			string target = pbxProject.TargetGuidByName("Unity-iPhone");
//			pbxProject.SetBuildProperty(target, "ENABLE_BITCODE", "NO");
//
//			pbxProject.WriteToFile (projectPath);
//		}
//	}
	#endif
}