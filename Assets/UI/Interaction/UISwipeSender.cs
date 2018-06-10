using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class UISwipeSender : MonoBehaviour,
	IBeginDragHandler, IEndDragHandler
{
	[SerializeField] UnityEvent OnSwipeUp;
	[SerializeField] UnityEvent OnSwipeDown;
	[SerializeField] UnityEvent OnSwipeLeft;
	[SerializeField] UnityEvent OnSwipeRight;

	Vector2 dragStart;
	Vector2 dragEnd;

	bool isSwipe = false;

	Coroutine IsDragChecker;

	float minDistance = 80.0f;

	public void OnBeginDrag(PointerEventData eventData)
	{
		dragStart = eventData.position;

		isSwipe = true;

		if (IsDragChecker != null)
			StopCoroutine(IsDragChecker);

		IsDragChecker = StartCoroutine(RunIsStillSwipe());
	}

	public void OnEndDrag(PointerEventData eventData)
	{
		if (isSwipe) {
			dragEnd = eventData.position;

			dragStart.x -= dragEnd.x;
			dragStart.y -= dragEnd.y;

			// Debug.Log(dragStart.sqrMagnitude);
			// Debug.Log(dragStart);

			if (dragStart.magnitude > minDistance)
			{
				// vertical swipe
				if (Mathf.Abs(dragStart.y) > Mathf.Abs(dragStart.x))
				{
					if (OnSwipeDown != null && dragStart.y > 0.0f)
						OnSwipeDown.Invoke();
					else if (OnSwipeUp != null && dragStart.y < 0.0f)
						OnSwipeUp.Invoke();
				}
				// horizontal swipe
				else
				{
					if (OnSwipeLeft != null && dragStart.x > 0.0f)
						OnSwipeLeft.Invoke();
					else if (OnSwipeRight != null && dragStart.x < 0.0f)
						OnSwipeRight.Invoke();
				}
			}
		}

	}

	static WaitForSeconds isSwipeWait = new WaitForSeconds(0.3f);
	IEnumerator RunIsStillSwipe()
	{
		yield return isSwipeWait;

		isSwipe = false;
		// Debug.Log("no longer swipe");
	}
}
