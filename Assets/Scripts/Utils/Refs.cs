using UnityEngine;
using System.Collections;

public class Refs : Singleton<Refs> {

	bool isActive = false;
	public bool IsActive {
		get {return isActive;}
	}

	public void Setup() {
		StateHandler = gameObject.GetComponent<StateHandler>();

		ScreenHandler = gameObject.AddComponent<ScreenHandler>();
		ScreenHandler.Setup();

		// DisplayStrings = Resources.Load<DisplayStringsContainer>($"DisplayStrings/{Application.systemLanguage.ToString()}");

		Materials = Resources.Load<MaterialContainer>("MaterialContainer");

		ARFeed = Resources.Load<RenderTexture>("ARFeed");
		ARFeed_NoUI = Resources.Load<RenderTexture>("ARFeed_NoUI");
		Pattern = Resources.Load<RenderTexture>("Pattern");
		ProductPreview = Resources.Load<RenderTexture>("ProductPreview");

		isActive = true;
	}

	public Texture2D ShareTexture2D { get; set; }
	public Texture2D CapturedTexture { get; set; }

	public StateHandler StateHandler { get; private set; }
	public ScreenHandler ScreenHandler { get; private set; }

	// public DisplayStringsContainer DisplayStrings { get; private set; }

	public MaterialContainer Materials { get; private set; }

	public RenderTexture ARFeed { get; private set; }
	public RenderTexture ARFeed_NoUI { get; private set; }
	public RenderTexture Pattern { get; private set; }
	public RenderTexture ProductPreview { get; private set; }

	public Camera Camera { get; private set; }

	public T GetScreenData<T>(ScreenHandler.Screens screen) {
		return (T)System.Convert.ChangeType(ScreenHandler.GetSreenData(screen), typeof(T));
	}

	public T GetSreenController<T>(ScreenHandler.Screens screen) {
		return (T)System.Convert.ChangeType(ScreenHandler.GetSreenData(screen).BaseController, typeof(T));
	}

	public StateHandler.States GoBackState = StateHandler.States.Menu;
}
