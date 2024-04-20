const mergeMaps = (map1, map2) => {
  return new Map([...map1, ...map2]);
};

const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["b", 3],
  ["c", 4],
]);

console.log(mergeMaps(map1, map2));
