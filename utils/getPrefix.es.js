const prefix = "rkk";
const withPrefix = (string, separator = " ") => {
  if (Array.isArray(string))
    return string.map((item) => `${prefix}-${item}`).join(separator);
  return `${prefix}-${string}`;
};
export {
  prefix,
  withPrefix
};
//# sourceMappingURL=getPrefix.es.js.map
