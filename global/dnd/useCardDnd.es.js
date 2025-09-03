import { useRef, useState, useCallback, useEffect } from "react";
import { dropTargetForElements, draggable } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.es.js";
import { attachClosestEdge, extractClosestEdge } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.es.js";
import { combine } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.es.js";
import { setCustomNativeDragPreview } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/element/custom-native-drag-preview/set-custom-native-drag-preview.es.js";
import { preserveOffsetOnSource } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/element/custom-native-drag-preview/preserve-offset-on-source.es.js";
import { useKanbanContext } from "../../context/KanbanContext.es.js";
const idle = {
  type: "idle"
};
const useCardDnd = (data, column, index, isDraggable, onCardDndStateChange) => {
  const {
    viewOnly
  } = useKanbanContext();
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [state, setState] = useState(idle);
  const getInitialData = useCallback(() => {
    var _a;
    return {
      type: "card",
      itemId: data.id,
      columnId: column.id,
      index,
      isDraggable,
      parentId: data.parentId,
      rect: ((_a = innerRef.current) == null ? void 0 : _a.getBoundingClientRect()) || null
    };
  }, [data.id, column.id, index, isDraggable, data.parentId]);
  const getDropTargetData = useCallback(({
    input,
    element
  }) => {
    const cardData = {
      type: "card",
      "card-drop-target": true,
      itemId: data.id,
      columnId: column.id,
      index,
      isDraggable,
      parentId: data.parentId
    };
    return attachClosestEdge(cardData, {
      input,
      element,
      allowedEdges: ["top", "bottom"]
    });
  }, [data.id, column.id, index, isDraggable, data.parentId]);
  const canDrop = useCallback((args) => {
    const sourceData = args.source.data;
    if (sourceData.itemId === data.parentId)
      return false;
    return sourceData.isDraggable;
  }, [data.id, data.parentId]);
  const handleGenerateDragPreview = useCallback(({
    nativeSetDragImage,
    location
  }) => {
    setCustomNativeDragPreview({
      nativeSetDragImage,
      getOffset: preserveOffsetOnSource({
        element: innerRef.current,
        input: location.current.input
      }),
      render({
        container
      }) {
        const rect = innerRef.current.getBoundingClientRect();
        setState({
          type: "preview",
          container,
          dragging: rect
        });
      }
    });
  }, []);
  const handleDragStart = useCallback(() => {
    setState({
      type: "is-dragging"
    });
  }, []);
  const handleDrop = useCallback(() => {
    setState(idle);
  }, []);
  const handleDragEnter = useCallback(({
    source,
    self
  }) => {
    if (source.data.type !== "card")
      return;
    if (source.data.itemId === data.id)
      return;
    const closestEdge = extractClosestEdge(self.data);
    if (!closestEdge)
      return;
    setState({
      type: "is-over",
      dragging: source.data.rect,
      closestEdge
    });
  }, [data.id]);
  const handleDrag = useCallback(({
    source,
    self
  }) => {
    if (source.data.type !== "card")
      return;
    if (source.data.itemId === data.id)
      return;
    const closestEdge = extractClosestEdge(self.data);
    if (!closestEdge)
      return;
    setState({
      type: "is-over",
      dragging: source.data.rect,
      closestEdge
    });
  }, [data.id]);
  const handleDragLeave = useCallback(({
    source
  }) => {
    if (source.data.type !== "card")
      return;
    if (source.data.itemId === data.id) {
      setState({
        type: "is-dragging-and-left-self"
      });
      return;
    }
    setState(idle);
  }, [data.id]);
  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner)
      return;
    return combine(draggable({
      element: inner,
      getInitialData,
      onGenerateDragPreview: handleGenerateDragPreview,
      onDragStart: handleDragStart,
      onDrop: handleDrop,
      canDrag: () => isDraggable && !viewOnly
    }), dropTargetForElements({
      element: outer,
      canDrop,
      getIsSticky: () => true,
      getData: getDropTargetData,
      onDragEnter: handleDragEnter,
      onDrag: handleDrag,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    }));
  }, [getInitialData, handleGenerateDragPreview, handleDragStart, handleDrop, isDraggable, canDrop, getDropTargetData, handleDragEnter, handleDrag, handleDragLeave]);
  useEffect(() => {
    onCardDndStateChange == null ? void 0 : onCardDndStateChange({
      state,
      card: data,
      column
    });
  }, [state, onCardDndStateChange]);
  return {
    outerRef,
    innerRef,
    state
  };
};
export {
  useCardDnd
};
//# sourceMappingURL=useCardDnd.es.js.map
