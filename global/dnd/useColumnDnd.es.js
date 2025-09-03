import { useRef, useState, useCallback, useEffect } from "react";
import { withPrefix } from "../../utils/getPrefix.es.js";
import { dropTargetForElements, draggable } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.es.js";
import { setCustomNativeDragPreview } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/element/custom-native-drag-preview/set-custom-native-drag-preview.es.js";
import { preserveOffsetOnSource } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/element/custom-native-drag-preview/preserve-offset-on-source.es.js";
import { combine } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.es.js";
import { autoScrollForElements } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop-auto-scroll/dist/esm/entry-point/element.es.js";
import { useKanbanContext } from "../../context/KanbanContext.es.js";
const isCardData = (data) => {
  return data.type === "card";
};
const isColumnData = (data) => {
  return data.type === "column";
};
const idle = {
  type: "idle"
};
const useColumnDnd = (data, index, items, onColumnDndStateChange) => {
  useKanbanContext();
  const headerRef = useRef(null);
  const outerFullHeightRef = useRef(null);
  const innerRef = useRef(null);
  const [state, setState] = useState(idle);
  const cardOverShadowCount = state.type === "is-card-over" && !state.isOverChildCard ? 1 : 0;
  const totalTasksCount = data.totalChildrenCount + cardOverShadowCount;
  const setIsCardOver = useCallback(({
    data: data2,
    location
  }) => {
    const innerMost = location.current.dropTargets[0];
    const isOverChildCard = Boolean(innerMost == null ? void 0 : innerMost.data["card-drop-target"]);
    const proposed = {
      type: "is-card-over",
      dragging: data2.rect,
      isOverChildCard
    };
    setState(proposed);
  }, []);
  const handleGenerateDragPreview = useCallback(({
    location,
    nativeSetDragImage
  }) => {
    setCustomNativeDragPreview({
      nativeSetDragImage,
      getOffset: preserveOffsetOnSource({
        element: headerRef.current,
        input: location.current.input
      }),
      render({
        container
      }) {
        const rect = innerRef.current.getBoundingClientRect();
        const preview = innerRef.current.cloneNode(true);
        if (!preview)
          return;
        preview.style.width = `${rect.width}px`;
        preview.style.height = `${rect.height}px`;
        preview.style.transform = "rotate(4deg)";
        container.appendChild(preview);
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
    location
  }) => {
    if (isCardData(source.data)) {
      setIsCardOver({
        data: source.data,
        location
      });
      return;
    }
    if (isColumnData(source.data) && source.data.columnId !== data.id) {
      setState({
        type: "is-column-over"
      });
    }
  }, [data.id, setIsCardOver]);
  const handleDropTargetChange = useCallback(({
    source,
    location
  }) => {
    if (isCardData(source.data)) {
      setIsCardOver({
        data: source.data,
        location
      });
      return;
    }
  }, [setIsCardOver]);
  const handleDragLeave = useCallback(({
    source
  }) => {
    if (isColumnData(source.data) && source.data.columnId === data.id) {
      return;
    }
    setState(idle);
  }, [data.id]);
  const canDrop = useCallback(({
    source
  }) => {
    return source.data.type === "card" || source.data.type === "column";
  }, []);
  const canScroll = useCallback(({
    source
  }) => {
    return source.data.type === "card";
  }, []);
  const getConfiguration = useCallback(() => {
    return {
      maxScrollSpeed: "standard"
    };
  }, []);
  useEffect(() => {
    if (!outerFullHeightRef.current || !innerRef.current || !headerRef.current) {
      console.warn("not ready");
      return;
    }
    const scroller = outerFullHeightRef.current.querySelector(`.${withPrefix("column-content-list")}`);
    const columnData = {
      type: "column",
      columnId: data.id,
      column: data,
      index
    };
    return combine(draggable({
      element: headerRef.current,
      getInitialData: () => columnData,
      onGenerateDragPreview: handleGenerateDragPreview,
      onDragStart: handleDragStart,
      onDrop: handleDrop,
      //TODO: add dnd in columns
      canDrag: () => false
    }), dropTargetForElements({
      element: outerFullHeightRef.current,
      getData: () => columnData,
      canDrop,
      getIsSticky: () => true,
      onDragStart: ({
        source,
        location
      }) => {
        if (isCardData(source.data)) {
          setIsCardOver({
            data: source.data,
            location
          });
        }
      },
      onDragEnter: handleDragEnter,
      onDropTargetChange: handleDropTargetChange,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop
    }), autoScrollForElements({
      canScroll,
      getConfiguration,
      element: scroller
    }));
  }, [data, index, items == null ? void 0 : items.length, handleGenerateDragPreview, handleDragStart, handleDrop, canDrop, setIsCardOver, handleDragEnter, handleDropTargetChange, handleDragLeave, canScroll, getConfiguration]);
  useEffect(() => {
    onColumnDndStateChange == null ? void 0 : onColumnDndStateChange({
      state,
      column: data
    });
  }, [state, onColumnDndStateChange]);
  return {
    headerRef,
    outerFullHeightRef,
    innerRef,
    state,
    cardOverShadowCount,
    totalTasksCount
  };
};
export {
  useColumnDnd
};
//# sourceMappingURL=useColumnDnd.es.js.map
