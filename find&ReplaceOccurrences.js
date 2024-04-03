/**Write a function to find and replace a specific value in a nested object. For example:
 * 
// Replace all occurrences of 2 with 4
// Output:
// { a: { b: 4 }, c: { d: { e: 3 } } }
 */
const obj = {
  a: { b: 2 },
  c: { d: { e: 2 } },
};

const replace = (object) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (
        typeof element === "object" &&
        element !== null &&
        !Array.isArray(element)
      ) {
        replace(element);
      } else {
        if (element == 2) {
          object[key] = 4;
        }
      }
    }
  }

  return object;
};

console.log(replace(obj));
