using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;


public class UIClickChildIndexSender : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerClickHandler
{
	[SerializeField] UnityEvent OnClickSimple;

	public System.Action<int> OnClick { get; set; }

	bool isTap;
	Coroutine IsStillTapRoutine;

	int siblingIndex;

	void OnEnable()
	{
		siblingIndex = transform.GetSiblingIndex();
	}

	public void OnPointerDown(PointerEventData eventData)
	{
		isTap = true;

		if (IsStillTapRoutine != null)
			StopCoroutine(IsStillTapRoutine);

		IsStillTapRoutine = StartCoroutine(RunIsStillTap());
	}

	public void OnPointerUp(PointerEventData eventData)
	{

	}

	public void OnPointerClick(PointerEventData eventData)
	{
		if (isTap)
		{
			if (OnClick != null)
				OnClick(siblingIndex);

			if (OnClickSimple != null)
				OnClickSimple.Invoke();
		}
	}

	static WaitForSeconds isTapWait = new WaitForSeconds(0.8f);
	IEnumerator RunIsStillTap()
	{
		yield return isTapWait;

		isTap = false;
	}
}
