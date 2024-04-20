const mapKeysToArray = (map1) => {
  const arr = [];

  for (const [key, value] of map1.entries()) {
    arr.push(key);
  }
  return arr;
};

const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(mapKeysToArray(map1));
