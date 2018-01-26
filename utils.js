// fuzzy match util fn
export const fuzzyMatch = (str, pattern) => {
  const p = pattern.split("").reduce((a, b) => a + ".*" + b);
  return (new RegExp(p)).test(str);
};
