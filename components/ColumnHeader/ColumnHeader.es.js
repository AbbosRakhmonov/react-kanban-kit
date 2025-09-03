import { withPrefix } from "../../utils/getPrefix.es.js";
import { forwardRef } from "react";
import classNames from "../../node_modules/classnames/index.es.js";
import { jsx, jsxs } from "react/jsx-runtime";
const ColumnHeader = forwardRef((props, ref) => {
  const {
    renderColumnHeader,
    columnHeaderStyle,
    columnHeaderClassName = "",
    data
  } = props;
  const headerClassName = classNames(withPrefix("column-header"), columnHeaderClassName);
  if (renderColumnHeader)
    return /* @__PURE__ */ jsx("div", {
      ref,
      children: renderColumnHeader(data)
    });
  return /* @__PURE__ */ jsxs("header", {
    ref,
    className: headerClassName,
    style: columnHeaderStyle == null ? void 0 : columnHeaderStyle(data),
    children: [/* @__PURE__ */ jsx("div", {
      className: withPrefix("column-header-left"),
      children: data == null ? void 0 : data.title
    }), /* @__PURE__ */ jsx("div", {
      className: withPrefix("column-header-right"),
      children: (data == null ? void 0 : data.totalItemsCount) || (data == null ? void 0 : data.totalChildrenCount) || 0
    })]
  });
});
export {
  ColumnHeader as default
};
//# sourceMappingURL=ColumnHeader.es.js.map
