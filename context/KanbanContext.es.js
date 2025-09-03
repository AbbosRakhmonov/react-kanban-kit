import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
const KanbanContext = createContext(void 0);
const useKanbanContext = () => {
  const context = useContext(KanbanContext);
  if (!context)
    throw new Error("KanbanContext must be used within a provider");
  return context;
};
const KanbanProvider = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(KanbanContext.Provider, {
    value: props,
    children
  });
};
export {
  KanbanProvider,
  useKanbanContext
};
//# sourceMappingURL=KanbanContext.es.js.map
