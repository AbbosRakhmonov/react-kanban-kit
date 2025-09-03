import { useKanbanContext } from "../../context/KanbanContext.es.js";
import { withPrefix } from "../../utils/getPrefix.es.js";
import { jsx } from "react/jsx-runtime";
const ColumnAdder = ({
  renderColumnAdder
}) => {
  const {
    allowColumnAdder = true
  } = useKanbanContext();
  if (!allowColumnAdder)
    return null;
  return /* @__PURE__ */ jsx("div", {
    className: withPrefix("column-adder"),
    children: renderColumnAdder == null ? void 0 : renderColumnAdder()
  });
};
export {
  ColumnAdder as default
};
//# sourceMappingURL=ColumnAdder.es.js.map
