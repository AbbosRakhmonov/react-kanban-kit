import { withPrefix } from "./getPrefix.es.js";
const handleScroll = (e, virtualization, onScroll, column) => {
  const scrollContainer = document.querySelector(`.${withPrefix("column-content-list")}`);
  if (!scrollContainer)
    return;
  const {
    scrollHeight,
    clientHeight
  } = scrollContainer;
  let offset;
  if (virtualization) {
    offset = typeof e === "number" ? e : 0;
  } else {
    const target = e.target;
    offset = target.scrollTop;
  }
  const syntheticEvent = {
    target: {
      scrollTop: offset,
      scrollHeight,
      clientHeight
    }
  };
  onScroll == null ? void 0 : onScroll(syntheticEvent, column);
};
export {
  handleScroll
};
//# sourceMappingURL=scroll.es.js.map
