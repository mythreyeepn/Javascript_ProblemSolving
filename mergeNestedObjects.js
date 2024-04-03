/**Write a function to merge two nested objects into one. If both objects have the same key,
 *  merge their values. 
 * For example:
 * const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { d: 4 }, e: 5 };
// Output:
// { a: { b: 2, d: 4 }, c: 3, e: 5 } */
const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { d: 4 }, e: 5 };
// Output:
// { a: { b: 2, d: 4 }, c: 3, e: 5 }

const merge = (obj1,obj2) => {
  let mergedObj={}
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      const element = obj1[key];
      mergedObj[key]=merge(obj1[key],obj2[key]);
    }else{
      mergedObj[key]=obj1[key]
    }
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
        mergedObj[key] = obj2[key]
    }
}

  return mergedObj;
}

console.log(merge(obj1,obj2))