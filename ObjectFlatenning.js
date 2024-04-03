/**Given a nested object, flatten it into a single-level object. For example:
 * const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};
// Output:
// { a: 1, 'b.c': 2, 'b.d.e': 3 }
  */
const flattenObj = (obj, parentKey = "", res = {}) => {
  for (key in obj) {
    const prefixedKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObj(obj[key], prefixedKey, res);
    } else {
      res[prefixedKey] = obj[key];
    }
  }
  return res;
};

console.log(flattenObj(input));
