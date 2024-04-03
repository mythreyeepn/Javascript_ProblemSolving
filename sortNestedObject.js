/** Write a function to sort the keys of a nested object recursively. For example:
 * 
// Output:
// { c: { d: 3 }, z: { a: 1, b: 2 } }
 */
const obj = {
  z: { b: 2, a: 1 },
  c: { d: 3 },
};



//Chat gpt
const objSort1 = (obj) => {
  // Sort keys of the object
  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      const value = obj[key];
      // If the value is an object and not null or array, recursively sort it
      sortedObj[key] =
        typeof value === "object" && value !== null && !Array.isArray(value)
          ? objSort(value)
          : value; // Otherwise, just assign the value
    });
  return sortedObj;
};

console.log(objSort1(obj));
