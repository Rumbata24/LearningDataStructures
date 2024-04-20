const mapToArray = (map1) => {
  const arr = [];

  map1.forEach((value) => {
    arr.push(value);
  });

  return arr;
};

const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(mapToArray(map1));
