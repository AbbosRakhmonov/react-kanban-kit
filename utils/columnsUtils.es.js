const getColumnsFromDataSource = (dataSource) => {
  var _a;
  if (!(dataSource == null ? void 0 : dataSource.root))
    return [];
  return ((_a = dataSource.root.children) == null ? void 0 : _a.map((child) => dataSource[child])) || [];
};
const getColumnChildren = (column, dataSource) => {
  var _a;
  if (!column)
    return [];
  return ((_a = column.children) == null ? void 0 : _a.map((child) => dataSource[child])) || [];
};
export {
  getColumnChildren,
  getColumnsFromDataSource
};
//# sourceMappingURL=columnsUtils.es.js.map
