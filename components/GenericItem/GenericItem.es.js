import classNames from "../../node_modules/classnames/index.es.js";
import { withPrefix } from "../../utils/getPrefix.es.js";
import CardSkeleton from "../CardSkeleton/CardSkeleton.es.js";
import Card, { CardShadow } from "../Card/Card.es.js";
import DefaultCard from "../DefaultCard/DefaultCard.es.js";
import { jsx } from "react/jsx-runtime";
const isCardDraggable = (data, isTypeDraggable) => {
  return (data == null ? void 0 : data.isDraggable) !== void 0 ? data == null ? void 0 : data.isDraggable : isTypeDraggable;
};
const GenericItem = (props) => {
  const {
    index,
    options
  } = props;
  const {
    data,
    column,
    configMap,
    isSkeleton,
    cardWrapperStyle,
    cardWrapperClassName,
    cardsGap = 8,
    isShadow,
    isListFooter,
    cardOverHeight = 90,
    renderSkeletonCard,
    onCardClick,
    onCardDndStateChange,
    renderCardDragIndicator,
    renderListFooter,
    renderGap
  } = options;
  const {
    render = DefaultCard,
    isDraggable = true
  } = (configMap == null ? void 0 : configMap[data == null ? void 0 : data.type]) || {};
  const wrapperClassName = classNames(withPrefix("generic-item-wrapper"), cardWrapperClassName);
  const renderCardContent = () => {
    if (isListFooter)
      return /* @__PURE__ */ jsx("div", {
        className: withPrefix("generic-item-list-footer"),
        children: (renderListFooter == null ? void 0 : renderListFooter(column)) || "Default Footer"
      });
    else if (isShadow)
      return /* @__PURE__ */ jsx(CardShadow, {
        height: cardOverHeight,
        customIndicator: renderCardDragIndicator == null ? void 0 : renderCardDragIndicator(data, {
          height: cardOverHeight
        })
      });
    else if (isSkeleton)
      return /* @__PURE__ */ jsx("div", {
        className: withPrefix("generic-item-skeleton"),
        "data-index": index,
        "data-rkk-column": column == null ? void 0 : column.id,
        children: (renderSkeletonCard == null ? void 0 : renderSkeletonCard({
          index,
          column
        })) || /* @__PURE__ */ jsx(CardSkeleton, {
          animationType: "wave"
        })
      });
    return /* @__PURE__ */ jsx(Card, {
      render,
      isDraggable: isCardDraggable(data, isDraggable),
      data,
      column,
      index,
      onClick: onCardClick,
      cardsGap,
      renderGap,
      onCardDndStateChange,
      renderCardDragIndicator
    });
  };
  return /* @__PURE__ */ jsx("div", {
    className: wrapperClassName,
    style: {
      ...(cardWrapperStyle == null ? void 0 : cardWrapperStyle(data, column)) || {}
    },
    children: renderCardContent()
  });
};
export {
  GenericItem as default
};
//# sourceMappingURL=GenericItem.es.js.map
