import { extractClosestEdge } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.es.js";
import { reorderWithEdge } from "../../node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/reorder-with-edge.es.js";
const isCardData = (data) => (data == null ? void 0 : data.type) === "card";
const isColumnData = (data) => (data == null ? void 0 : data.type) === "column";
const getTasksByColumnId = (columnId, dataSource) => {
  const tasks = [];
  const column = dataSource[columnId];
  if (!column)
    return tasks;
  const parentTasks = column.children;
  parentTasks == null ? void 0 : parentTasks.forEach((taskId) => {
    const task = dataSource[taskId];
    if (task)
      tasks.push(task);
  });
  return tasks;
};
const handleCardDrop = ({
  source,
  location,
  columns,
  dataSource,
  onCardMove,
  onColumnMove
}) => {
  if (isColumnData(source.data)) {
    if (!onColumnMove)
      return;
    const sourceColumnId2 = source.data.columnId;
    const innerMost2 = location.current.dropTargets[0];
    if (!innerMost2)
      return;
    const dropTargetData2 = innerMost2.data;
    if (isColumnData(dropTargetData2)) {
      const targetColumnId = dropTargetData2.columnId;
      const targetIndex = columns.findIndex((col) => col.id === targetColumnId);
      if (targetIndex === -1)
        return;
      if (sourceColumnId2 === targetColumnId)
        return;
      onColumnMove == null ? void 0 : onColumnMove({
        columnId: sourceColumnId2,
        fromIndex: columns.findIndex((col) => col.id === sourceColumnId2),
        toIndex: targetIndex
      });
    }
    return;
  }
  if (!isCardData(source.data)) {
    return;
  }
  const draggingCardId = source.data.itemId;
  const sourceColumnId = source.data.columnId;
  const innerMost = location.current.dropTargets[0];
  if (!innerMost)
    return;
  const dropTargetData = innerMost.data;
  if (dropTargetData["card-drop-target"]) {
    const targetColumnId = dropTargetData.columnId;
    const targetCardId = dropTargetData.itemId;
    const closestEdge = extractClosestEdge(dropTargetData);
    const sourceColumn = dataSource[sourceColumnId];
    const targetColumn = dataSource[targetColumnId];
    if (!sourceColumn || !targetColumn)
      return;
    if (sourceColumnId === targetColumnId) {
      const allTasks = getTasksByColumnId(targetColumnId, dataSource);
      const sourceIndex = allTasks.findIndex((task) => task.id === draggingCardId);
      const targetIndex = allTasks.findIndex((task) => task.id === targetCardId);
      if (sourceIndex === -1 || targetIndex === -1)
        return;
      if (sourceIndex === targetIndex)
        return;
      const reordered = reorderWithEdge({
        axis: "vertical",
        list: allTasks,
        startIndex: sourceIndex,
        indexOfTarget: targetIndex,
        closestEdgeOfTarget: closestEdge
      });
      const newPosition = reordered.findIndex((task) => task.id === draggingCardId);
      const taskAbove = newPosition > 0 ? reordered[newPosition - 1] : null;
      const taskBelow = newPosition < reordered.length - 1 ? reordered[newPosition + 1] : null;
      if (onCardMove) {
        onCardMove({
          cardId: draggingCardId,
          fromColumnId: sourceColumnId,
          toColumnId: targetColumnId,
          taskAbove: taskAbove == null ? void 0 : taskAbove.id,
          taskBelow: taskBelow == null ? void 0 : taskBelow.id,
          position: newPosition
        });
      }
    } else {
      const allTargetTasks = getTasksByColumnId(targetColumnId, dataSource);
      const targetIndex = allTargetTasks.findIndex((task) => task.id === targetCardId);
      if (targetIndex === -1)
        return;
      const finalIndex = closestEdge === "bottom" ? targetIndex + 1 : targetIndex;
      const draggingTask = getTasksByColumnId(sourceColumnId, dataSource).find((task) => task.id === draggingCardId);
      if (!draggingTask)
        return;
      const tempArray = [...allTargetTasks];
      tempArray.splice(finalIndex, 0, draggingTask);
      const reordered = reorderWithEdge({
        axis: "vertical",
        list: tempArray,
        startIndex: finalIndex,
        indexOfTarget: finalIndex,
        closestEdgeOfTarget: closestEdge
      });
      const newPosition = reordered.findIndex((task) => task.id === draggingCardId);
      const taskAbove = newPosition > 0 ? reordered[newPosition - 1] : null;
      const taskBelow = newPosition < reordered.length - 1 ? reordered[newPosition + 1] : null;
      if (onCardMove) {
        onCardMove({
          cardId: draggingCardId,
          fromColumnId: sourceColumnId,
          toColumnId: targetColumnId,
          taskAbove: taskAbove == null ? void 0 : taskAbove.id,
          taskBelow: taskBelow == null ? void 0 : taskBelow.id,
          position: newPosition
        });
      }
    }
  } else if (isColumnData(dropTargetData)) {
    const targetColumnId = dropTargetData.columnId;
    const targetTasks = getTasksByColumnId(targetColumnId, dataSource);
    const taskAbove = targetTasks.length > 0 ? targetTasks[targetTasks.length - 1] : null;
    if (onCardMove) {
      onCardMove({
        cardId: draggingCardId,
        fromColumnId: sourceColumnId,
        toColumnId: targetColumnId,
        taskAbove: taskAbove == null ? void 0 : taskAbove.id,
        taskBelow: null,
        position: targetTasks.length
      });
    }
  }
};
const dropColumnHandler = (drop, dataSource) => {
  var _a;
  const {
    columnId,
    position
  } = drop;
  const newDataSource = {
    ...dataSource
  };
  const rootChildren = [...((_a = newDataSource["root"]) == null ? void 0 : _a.children) || []];
  const currentIndex = rootChildren.indexOf(columnId);
  if (currentIndex === -1)
    return newDataSource;
  rootChildren.splice(currentIndex, 1);
  rootChildren.splice(position, 0, columnId);
  if (newDataSource["root"]) {
    newDataSource["root"].children = rootChildren;
  }
  return newDataSource;
};
const dropHandler = (drop, dataSource, updateDroppedItem, updateDestinationColumn, updateSourceColumn) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const {
    cardId,
    fromColumnId,
    toColumnId,
    taskAbove,
    taskBelow
  } = drop;
  const newDataSource = {
    ...dataSource
  };
  if ((_a = newDataSource[fromColumnId]) == null ? void 0 : _a.children) {
    newDataSource[fromColumnId].children = newDataSource[fromColumnId].children.filter((id) => id !== cardId);
    if (((_b = newDataSource[fromColumnId]) == null ? void 0 : _b.totalItems) !== void 0 && newDataSource[fromColumnId].totalItems > 0)
      newDataSource[fromColumnId].totalItems--;
  }
  if (updateSourceColumn && newDataSource[fromColumnId])
    newDataSource[fromColumnId] = updateSourceColumn(newDataSource[fromColumnId]);
  const targetChildren = ((_c = newDataSource[toColumnId]) == null ? void 0 : _c.children) || [];
  let insertIndex = 0;
  if (taskAbove)
    insertIndex = targetChildren.indexOf(taskAbove) + 1;
  else if (taskBelow)
    insertIndex = targetChildren.indexOf(taskBelow);
  const alreadyExistInTarget = targetChildren.includes(cardId);
  if (((_d = newDataSource[toColumnId]) == null ? void 0 : _d.totalItems) !== void 0 && !alreadyExistInTarget)
    newDataSource[toColumnId].totalItems++;
  if (updateDroppedItem && newDataSource[cardId]) {
    const updatedItem = updateDroppedItem == null ? void 0 : updateDroppedItem(newDataSource[toColumnId], newDataSource[cardId]);
    newDataSource[cardId] = updatedItem || newDataSource[cardId];
  }
  if ((_e = newDataSource[toColumnId]) == null ? void 0 : _e.children) {
    newDataSource[toColumnId].children = (_g = (_f = newDataSource[toColumnId]) == null ? void 0 : _f.children) == null ? void 0 : _g.filter((id) => id !== cardId);
    newDataSource[toColumnId].children.splice(insertIndex, 0, cardId);
  }
  if (updateDestinationColumn && newDataSource[toColumnId])
    newDataSource[toColumnId] = updateDestinationColumn(newDataSource[toColumnId]);
  return newDataSource;
};
export {
  dropColumnHandler,
  dropHandler,
  handleCardDrop
};
//# sourceMappingURL=dropManager.es.js.map
