using UnityEngine;

[System.Serializable]
public class CloudVisionData
{
    public string[] colors;
    public Color[] UnpackedColors;

    public static CloudVisionData CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<CloudVisionData>(jsonString);
    }

    public static void ParseColors(CloudVisionData data) {
			Debug.Log(data.colors);
			Debug.Log(data.colors.Length);

			data.UnpackedColors = new Color[data.colors.Length];

			for (int i = 0; i < data.UnpackedColors.Length; i++) {
				string[] split = data.colors[i].Split(',');

				Color color = new Color();
				color.r = float.Parse(split[0]) / 255.0f;
				color.g = float.Parse(split[1]) / 255.0f;
				color.b = float.Parse(split[2]) / 255.0f;
				color.a = 1.0f;

				data.UnpackedColors[i] = color;

				Debug.Log(data.colors[i]);
				Debug.Log(data.UnpackedColors[i]);
			}
		}
}