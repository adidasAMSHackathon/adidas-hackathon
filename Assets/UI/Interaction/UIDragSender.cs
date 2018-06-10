using UnityEngine;
using System.Collections;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class UIDragSender : MonoBehaviour, 
	IBeginDragHandler, IDragHandler, IEndDragHandler, 
	IPointerDownHandler, IPointerUpHandler
{
	[System.Serializable]
	public class V2IntEvent : UnityEvent<Vector2, int>{}

	[System.Serializable]
	public class PointerDataEvent : UnityEvent<PointerEventData>{}

	[SerializeField] V2IntEvent DragStart;
	[SerializeField] V2IntEvent DragStartNormalized;

	[SerializeField] V2IntEvent DragAbsolute;
	[SerializeField] V2IntEvent DragAbsoluteNormalized;

	[SerializeField] V2IntEvent DragDelta;
	[SerializeField] V2IntEvent DragEnd;

	[SerializeField] PointerDataEvent DragBeginRaw;
	[SerializeField] PointerDataEvent DragRaw;
	[SerializeField] PointerDataEvent DragRawVertical;
	[SerializeField] PointerDataEvent DragEndRaw;

	RectTransform rectT;
	Rect displayRect;

	Vector2 inRectPosition;

	bool? horizontalDrag = null;

	void Start()
	{
		rectT = (RectTransform)transform;

		displayRect = rectT.rect;

	}

	public void OnPointerDown(PointerEventData eventData)
	{
		DragStart.Invoke(eventData.position, eventData.pointerId);

		if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
			rectT,
			eventData.position,
			Refs.I.Camera,
			out inRectPosition
		)) {
			DragStartNormalized.Invoke(Rect.PointToNormalized(displayRect, inRectPosition), eventData.pointerId);
		}

	}

	public void OnBeginDrag(PointerEventData eventData)
	{
		DragBeginRaw.Invoke(eventData);

		horizontalDrag = null;
	}

	public void OnDrag(PointerEventData eventData)
	{
		DragDelta.Invoke(eventData.delta, eventData.pointerId);
		DragAbsolute.Invoke(eventData.position, eventData.pointerId);

		DragRaw.Invoke(eventData);

		if (horizontalDrag == null)
		{
			horizontalDrag = Mathf.Abs(eventData.delta.x) > Mathf.Abs(eventData.delta.y);
		}

		if (!horizontalDrag.Value)
		{
			DragRawVertical.Invoke(eventData);
		}

		if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
			rectT,
			eventData.position,
			Refs.I.Camera,
			out inRectPosition
		)) {
//			inRectPosition.x /= displayRect.width;
//			inRectPosition.y /= displayRect.height;
//			Debug.Log(Rect.PointToNormalized(displayRect, inRectPosition));

			DragAbsoluteNormalized.Invoke(Rect.PointToNormalized(displayRect, inRectPosition), eventData.pointerId);
//			Debug.Log(Rect.PointToNormalized(displayRect, inRectPosition));
		}
	}
	public void OnEndDrag(PointerEventData eventData)
	{
		DragEndRaw.Invoke(eventData);
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		DragEnd.Invoke(eventData.position, eventData.pointerId);
	}
}
