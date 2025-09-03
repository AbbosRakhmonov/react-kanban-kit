import { withPrefix } from "../../utils/getPrefix.es.js";
import { memo, useMemo, Fragment as Fragment$1 } from "react";
import { createPortal } from "react-dom";
import { useCardDnd } from "../../global/dnd/useCardDnd.es.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const CardShadow = memo(({
  height,
  customIndicator
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: withPrefix("card-shadow-container"),
    children: customIndicator || /* @__PURE__ */ jsx("div", {
      className: withPrefix("card-shadow"),
      style: {
        height: `${height - 2}px`
      }
    })
  });
});
const CardDisplay = (props) => {
  const {
    outerRef,
    innerRef,
    state,
    data,
    column,
    index,
    isDraggable,
    cardsGap,
    render,
    onClick,
    renderCardDragIndicator,
    renderGap
  } = props;
  const containerStyle = useMemo(() => {
    const styles = {};
    if (state.type === "is-dragging-and-left-self") {
      styles.display = "none";
    }
    return styles;
  }, [state.type]);
  const innerStyle = useMemo(() => {
    if (state.type === "is-dragging") {
      return {
        opacity: 0.6
      };
    }
    if (state.type === "preview") {
      return {
        width: state.dragging.width,
        height: state.dragging.height,
        transform: "rotate(4deg)"
      };
    }
    return {};
  }, [state]);
  const showTopShadow = state.type === "is-over" && state.closestEdge === "top";
  const showBottomShadow = state.type === "is-over" && state.closestEdge === "bottom";
  const shadowHeight = state.type === "is-over" ? state.dragging.height : 0;
  const renderContent = render({
    data,
    column,
    index,
    isDraggable
  });
  const customIndicator = renderCardDragIndicator == null ? void 0 : renderCardDragIndicator(state.type === "is-dragging" ? data : null, {
    height: shadowHeight
  });
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsxs("div", {
      ref: outerRef,
      className: withPrefix("card-outer"),
      onClick: (e) => onClick == null ? void 0 : onClick(e, data),
      style: {
        ...containerStyle,
        ...cardsGap !== void 0 ? {
          marginBottom: cardsGap
        } : {}
      },
      "data-test-id": data.id,
      "data-rkk-column": column.id,
      "data-rkk-index": index,
      children: [showTopShadow && /* @__PURE__ */ jsx(CardShadow, {
        height: shadowHeight,
        customIndicator
      }), /* @__PURE__ */ jsx("div", {
        ref: innerRef,
        className: withPrefix("card-inner"),
        style: {
          ...innerStyle,
          marginBottom: showBottomShadow ? cardsGap : 0,
          marginTop: showTopShadow ? cardsGap : 0
        },
        children: renderContent
      }), showBottomShadow && /* @__PURE__ */ jsx(CardShadow, {
        height: shadowHeight,
        customIndicator
      })]
    })
  });
};
const Card = (props) => {
  const {
    render,
    data,
    column,
    index,
    isDraggable,
    cardsGap,
    onClick,
    onCardDndStateChange,
    renderCardDragIndicator,
    renderCardDragPreview,
    renderGap
  } = props;
  const {
    outerRef,
    innerRef,
    state
  } = useCardDnd(data, column, index, isDraggable, onCardDndStateChange);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(CardDisplay, {
      outerRef,
      innerRef,
      state,
      data,
      column,
      index,
      isDraggable,
      render,
      onClick,
      cardsGap,
      renderCardDragIndicator,
      renderGap
    }), state.type === "preview" ? createPortal((renderCardDragPreview == null ? void 0 : renderCardDragPreview(data, {
      state,
      data,
      column,
      index,
      isDraggable
    })) || /* @__PURE__ */ jsx(CardDisplay, {
      state,
      data,
      column,
      index,
      isDraggable,
      render
    }), state.container) : null]
  });
};
export {
  CardShadow,
  Card as default
};
//# sourceMappingURL=Card.es.js.map
