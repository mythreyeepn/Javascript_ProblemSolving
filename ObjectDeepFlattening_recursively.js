/**
 * For the given input denormalized write code to generate output as given below
 * const output = {
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
 */

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

console.log(modify(denormalized));
