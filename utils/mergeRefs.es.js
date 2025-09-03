const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (typeof a === "function")
      a(value);
    if (typeof b === "function")
      b(value);
  };
}
export {
  mergeRefs as default
};
//# sourceMappingURL=mergeRefs.es.js.map
