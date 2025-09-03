import { getColumnsFromDataSource, getColumnChildren } from "../utils/columnsUtils.es.js";
import { withPrefix } from "../utils/getPrefix.es.js";
import classNames from "../node_modules/classnames/index.es.js";
import Column from "./Column/Column.es.js";
import { forwardRef, useRef, useEffect } from "react";
import { autoScroller } from "../node_modules/@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-autoscroll/dist/esm/index.es.js";
import { monitorForElements } from "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.es.js";
import { combine } from "../node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.es.js";
import { autoScrollForElements } from "../node_modules/@atlaskit/pragmatic-drag-and-drop-auto-scroll/dist/esm/entry-point/element.es.js";
import { KanbanProvider } from "../context/KanbanContext.es.js";
import mergeRefs from "../utils/mergeRefs.es.js";
import { handleCardDrop } from "../global/dnd/dropManager.es.js";
import { getSharedProps } from "../utils/getSharedProps.es.js";
import ColumnAdder from "./ColumnAdder/ColumnAdder.es.js";
import { jsx, jsxs } from "react/jsx-runtime";
const Kanban = forwardRef((props, ref) => {
  const {
    dataSource,
    rootStyle = {},
    rootClassName,
    onColumnMove,
    onCardMove,
    renderColumnWrapper,
    renderColumnAdder,
    ...rest
  } = props;
  const columns = getColumnsFromDataSource(dataSource);
  const internalRef = useRef(null);
  useEffect(() => {
    if (!internalRef.current)
      return;
    return combine(monitorForElements({
      onDragStart({
        location
      }) {
        autoScroller.start({
          input: location.current.input
        });
      },
      onDrag({
        location
      }) {
        autoScroller.updateInput({
          input: location.current.input
        });
      },
      onDrop(args) {
        autoScroller.stop();
        handleCardDrop({
          source: {
            id: args.source.id || "",
            data: args.source.data
          },
          location: {
            current: {
              dropTargets: args.location.current.dropTargets
            }
          },
          columns,
          dataSource,
          onCardMove,
          onColumnMove
        });
      }
    }), autoScrollForElements({
      element: internalRef.current,
      canScroll: () => true,
      getConfiguration: () => ({
        maxScrollSpeed: "standard"
      })
    }));
  }, [columns, dataSource, onCardMove, onColumnMove]);
  const containerClassName = classNames(withPrefix("board"), rootClassName);
  return /* @__PURE__ */ jsx(KanbanProvider, {
    ...getSharedProps(props),
    children: /* @__PURE__ */ jsxs("div", {
      ref: mergeRefs(ref, internalRef),
      className: containerClassName,
      style: rootStyle,
      children: [columns == null ? void 0 : columns.map((column, index) => /* @__PURE__ */ jsx(Column, {
        index,
        data: column,
        items: getColumnChildren(column, dataSource),
        renderColumnWrapper,
        ...rest
      }, column.id)), /* @__PURE__ */ jsx(ColumnAdder, {
        renderColumnAdder
      })]
    })
  });
});
export {
  Kanban as default
};
//# sourceMappingURL=Kanban.es.js.map
