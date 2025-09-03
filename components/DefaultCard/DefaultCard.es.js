import { withPrefix } from "../../utils/getPrefix.es.js";
import { jsx } from "react/jsx-runtime";
const DefaultCard = (props) => {
  var _a;
  return /* @__PURE__ */ jsx("div", {
    className: withPrefix("default-card"),
    children: (_a = props == null ? void 0 : props.data) == null ? void 0 : _a.title
  });
};
export {
  DefaultCard as default
};
//# sourceMappingURL=DefaultCard.es.js.map
