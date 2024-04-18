const objectSize = (obj) => {
   return Object.keys(obj).length
};

const object = { a: 1, b: 2, c: 3 };
console.log(objectSize(object));
