import { withPrefix } from "../../utils/getPrefix.es.js";
import classNames from "../../node_modules/classnames/index.es.js";
import ColumnHeader from "../ColumnHeader/ColumnHeader.es.js";
import ColumnContent from "../ColumnContent/ColumnContent.es.js";
import { useColumnDnd } from "../../global/dnd/useColumnDnd.es.js";
import { jsx, jsxs } from "react/jsx-runtime";
const Column = (props) => {
  const {
    index,
    data,
    items,
    onColumnClick,
    renderColumnHeader,
    renderColumnWrapper,
    renderColumnFooter,
    columnWrapperStyle,
    columnHeaderStyle,
    onColumnDndStateChange,
    columnWrapperClassName,
    columnHeaderClassName,
    columnListContentClassName,
    columnClassName,
    columnStyle,
    renderColumnAdder,
    ...rest
  } = props;
  const {
    headerRef,
    outerFullHeightRef,
    innerRef,
    state,
    cardOverShadowCount
  } = useColumnDnd(data, index, items, onColumnDndStateChange);
  const containerClassName = classNames(withPrefix("column-outer"), columnWrapperClassName == null ? void 0 : columnWrapperClassName(data));
  const ColumnWrapper = (children) => renderColumnWrapper ? renderColumnWrapper(data, {
    children,
    className: containerClassName,
    style: columnWrapperStyle == null ? void 0 : columnWrapperStyle(data),
    ref: outerFullHeightRef
  }) : /* @__PURE__ */ jsx("div", {
    className: containerClassName,
    ref: outerFullHeightRef,
    style: columnWrapperStyle == null ? void 0 : columnWrapperStyle(data),
    children
  });
  return /* @__PURE__ */ jsx("div", {
    onClick: (e) => onColumnClick == null ? void 0 : onColumnClick(e, data),
    children: ColumnWrapper(/* @__PURE__ */ jsx("div", {
      className: classNames(withPrefix("column"), columnClassName == null ? void 0 : columnClassName(data)),
      ref: innerRef,
      style: columnStyle == null ? void 0 : columnStyle(data),
      children: /* @__PURE__ */ jsxs("div", {
        className: withPrefix("column-wrapper"),
        children: [/* @__PURE__ */ jsx(ColumnHeader, {
          renderColumnHeader,
          columnHeaderStyle,
          columnHeaderClassName: columnHeaderClassName == null ? void 0 : columnHeaderClassName(data),
          data,
          ref: headerRef
        }), /* @__PURE__ */ jsx(ColumnContent, {
          items,
          column: data,
          columnListContentClassName: columnListContentClassName == null ? void 0 : columnListContentClassName(data),
          cardOverHeight: cardOverShadowCount ? state.dragging.height : null,
          cardOverShadowCount,
          ...rest
        }), renderColumnFooter == null ? void 0 : renderColumnFooter(data)]
      })
    }))
  });
};
export {
  Column as default
};
//# sourceMappingURL=Column.es.js.map
