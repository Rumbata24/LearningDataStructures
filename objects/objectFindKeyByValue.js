const objectFindKeyByValue = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

const obj = { a: 1, b: 2, c: 3 };
const value = 1;
console.log(objectFindKeyByValue(obj, value));
