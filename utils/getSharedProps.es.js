const getSharedProps = (props) => {
  const {
    viewOnly = false,
    virtualization = true,
    cardsGap = 8,
    allowColumnAdder = true,
    allowListFooter
  } = props;
  return {
    viewOnly,
    virtualization,
    cardsGap,
    allowColumnAdder,
    allowListFooter
  };
};
export {
  getSharedProps
};
//# sourceMappingURL=getSharedProps.es.js.map
