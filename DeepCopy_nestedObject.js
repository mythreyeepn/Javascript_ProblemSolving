/** Deep copy the given nested Object */
const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const deepClone = (Obj) => {
  let result = {};
  for (const key in Obj) {
    if (Object.hasOwnProperty.call(Obj, key)) {
      const element = Obj[key];
      if (
        typeof element === "object" &&
        element !== null &&
        !Array.isArray(element)
      ) {
        result[key] = deepClone(element);
      } else {
        result[key] = element;
      }
    }
  }
  return result;
};

let newObj = deepClone(originalObject);
newObj.b.d.e = 13;
console.log(newObj, originalObject);
