using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class UIClickSender : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerClickHandler
{
	[SerializeField] UnityEvent OnDown;
	[SerializeField] UnityEvent OnUp;

	[SerializeField] UnityEvent OnClick;

	public void OnPointerDown(PointerEventData eventData)
	{
		if (OnDown != null)
			OnDown.Invoke();
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		if (OnUp != null)
			OnUp.Invoke();
	}

	public void OnPointerClick(PointerEventData eventData)
	{
		if (OnClick != null)
			OnClick.Invoke();
	}
}
