// Input
const denormalized = {
  id: "grandParent",
  children: [
    {
      id: "parent1",
      children: [{ id: "child1" }],
    },
    {
      id: "parent2",
      children: [{ id: "child2" }, { id: "child3" }],
    },
  ],
};
//The output has to be in this way.
const Output = {
  grandParent: {
    id: "garndParent",
    children: ["parent1", "parent2"],
  },
  parent1: {
    id: "parent1",
    children: ["child"],
  },
  child1: {
    id: "child1",
  },
  parent2: {
    id: "parent2",
    children: ["child2", "child3"],
  },
  child2: {
    id: "child2",
  },
  child3: {
    id: "child3",
  },
};

const modify = (obj) => {
  let res = {};
  function recursive(obj) {
    const id = obj.id;
    res[id] = { id };
    if (!obj.children) {
      return res;
    } else {
      res[id].children = obj.children.map((child) => child.id);
      obj.children.forEach((child) => recursive(child));
    }
  }
  recursive(obj);
  return res;
};

let largeArray = [];
for (let i = 0; i < 10000000; i++) {
  largeArray.push(i);
}

const acc = largeArray.reduce((acc, array, index) => {
  if (index % 2 === 0) {
    return [...acc, array];
  }
  return acc;
}, []);

//Better
// let largeArray = [];
// for (let i = 0; i < 10000000; i++) {
//   largeArray.push(i);
// }
// let largeArray = [];
// for (let i = 0; i < 10000000; i++) {
//   largeArray.push(i);
// }

// const filteredArray = [];
// for (let i = 0; i < largeArray.length; i += 2) {
//   filteredArray.push(largeArray[i]);
// }

// const acc = largeArray.reduce((acc, array, index) => {
//   if (index % 2 === 0) {
//     acc.push(array);
//   }
//   return acc;
// }, []);
