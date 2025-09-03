import { withPrefix } from "../../utils/getPrefix.es.js";
import { forwardRef } from "react";
import classNames from "../../node_modules/classnames/index.es.js";
import { VList as te } from "../../node_modules/virtua/lib/index.es.js";
import GenericItem from "../GenericItem/GenericItem.es.js";
import { handleScroll } from "../../utils/scroll.es.js";
import { checkIfSkeletonIsVisible } from "../../utils/infinite-scroll.es.js";
import { useKanbanContext } from "../../context/KanbanContext.es.js";
import { jsx } from "react/jsx-runtime";
const renderGenericItem = (items, index, column, configMap, cardOverShadowCount, renderListFooter, props, count) => {
  return /* @__PURE__ */ jsx(GenericItem, {
    index,
    options: {
      data: items[index],
      column,
      configMap,
      isSkeleton: index >= items.length,
      renderListFooter,
      isShadow: cardOverShadowCount && index === count - (renderListFooter ? 2 : 1),
      isListFooter: renderListFooter && index === count - (renderListFooter ? 1 : 0),
      ...props
    }
  }, index);
};
const VirtualizedList = ({
  column,
  items,
  configMap,
  onScroll,
  cardOverShadowCount,
  renderListFooter,
  ...props
}) => {
  const count = (column == null ? void 0 : column.totalChildrenCount) + cardOverShadowCount + (renderListFooter ? 1 : 0);
  return /* @__PURE__ */ jsx(te, {
    count,
    onScroll,
    className: withPrefix("column-content-list"),
    children: (index) => renderGenericItem(items, index, column, configMap, cardOverShadowCount, renderListFooter, props, count)
  });
};
const NormalList = ({
  column,
  items,
  configMap,
  onScroll,
  cardOverShadowCount,
  renderListFooter,
  ...props
}) => {
  const count = (column == null ? void 0 : column.totalChildrenCount) + cardOverShadowCount + (renderListFooter ? 1 : 0);
  return /* @__PURE__ */ jsx("div", {
    className: withPrefix("column-content-list"),
    onScroll,
    children: Array.from({
      length: count
    }, (_, index) => renderGenericItem(items, index, column, configMap, cardOverShadowCount, renderListFooter, props, count))
  });
};
const ColumnContent = forwardRef((props, ref) => {
  const {
    items,
    column,
    configMap,
    columnListContentStyle,
    columnListContentClassName,
    cardWrapperStyle,
    renderSkeletonCard,
    cardWrapperClassName,
    onCardClick,
    loadMore,
    cardOverShadowCount,
    cardOverHeight,
    onCardDndStateChange,
    renderCardDragIndicator,
    renderCardDragPreview,
    renderListFooter,
    renderGap
  } = props;
  const {
    virtualization = true,
    cardsGap,
    allowListFooter
  } = useKanbanContext();
  const containerClassName = classNames(withPrefix("column-content"), columnListContentClassName);
  const onScroll = (e, column2) => {
    var _a;
    const isSkeletonVisible = checkIfSkeletonIsVisible({
      columnId: column2 == null ? void 0 : column2.id
    });
    if (isSkeletonVisible)
      loadMore == null ? void 0 : loadMore(column2 == null ? void 0 : column2.id);
    (_a = props == null ? void 0 : props.onScroll) == null ? void 0 : _a.call(props, e, column2);
  };
  const List = virtualization ? VirtualizedList : NormalList;
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: containerClassName,
    style: columnListContentStyle == null ? void 0 : columnListContentStyle(column),
    children: /* @__PURE__ */ jsx(List, {
      column,
      items,
      configMap,
      cardWrapperStyle,
      cardWrapperClassName,
      cardsGap,
      renderSkeletonCard,
      onScroll: (e) => handleScroll(e, virtualization, onScroll, column),
      onCardClick,
      cardOverShadowCount,
      onCardDndStateChange,
      renderCardDragIndicator,
      renderCardDragPreview,
      cardOverHeight,
      renderGap,
      renderListFooter: allowListFooter !== void 0 && (allowListFooter == null ? void 0 : allowListFooter(column)) || allowListFooter === void 0 ? renderListFooter : null
    })
  });
});
export {
  ColumnContent as default
};
//# sourceMappingURL=ColumnContent.es.js.map
