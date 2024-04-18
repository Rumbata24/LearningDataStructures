const objToArr = (obj) => {
  return Object.values(obj);
};

const obj = { a: 1, b: 2, c: 3 };
console.log(objToArr(obj));
