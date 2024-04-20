const findKeyByValue = (map1, value) => {
  for (const [key, val] of map1.entries()) {
    if (val === value) {
      return `${key}: ${val}`;
    }
  }

  return null;
};

const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log(findKeyByValue(map1, 2));
