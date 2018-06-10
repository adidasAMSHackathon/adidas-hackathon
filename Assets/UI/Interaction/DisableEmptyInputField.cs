using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class DisableEmptyInputField : MonoBehaviour, IPointerClickHandler
{
	InputField inputField;


	void Start ()
	{
		inputField = gameObject.GetComponent<InputField>();
		inputField.onEndEdit.AddListener(OnEditEnded);

		inputField.enabled = false;
	}

	void OnEditEnded(string input) {
		if (input.Length == 0) {
			inputField.enabled = false;
		}
	}
	
	public void OnPointerClick(PointerEventData eventData)
	{
		inputField.enabled = true;
		inputField.ActivateInputField();
	}
}
