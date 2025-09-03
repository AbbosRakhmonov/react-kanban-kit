import { withPrefix } from "../../utils/getPrefix.es.js";
import { jsx, jsxs } from "react/jsx-runtime";
const CardSkeleton = ({
  className,
  style,
  animationType = "shimmer"
}) => {
  const skeletonClass = `${withPrefix("skeleton")} ${animationType === "pulse" ? withPrefix("skeleton-pulse") : ""} ${animationType === "wave" ? withPrefix("skeleton-wave") : ""} ${className || ""}`.trim();
  const renderDefaultSkeleton = () => /* @__PURE__ */ jsxs("div", {
    className: withPrefix("skeleton-content"),
    children: [/* @__PURE__ */ jsx("div", {
      className: withPrefix("skeleton-title")
    }), /* @__PURE__ */ jsxs("div", {
      className: withPrefix("skeleton-description"),
      children: [/* @__PURE__ */ jsx("div", {
        className: withPrefix("skeleton-line")
      }), /* @__PURE__ */ jsx("div", {
        className: `${withPrefix("skeleton-line")} ${withPrefix("skeleton-line-short")}`
      })]
    })]
  });
  return /* @__PURE__ */ jsx("div", {
    className: skeletonClass,
    style,
    children: renderDefaultSkeleton()
  });
};
export {
  CardSkeleton as default
};
//# sourceMappingURL=CardSkeleton.es.js.map
