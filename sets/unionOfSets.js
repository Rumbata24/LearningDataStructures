const unions = (val1, val2) => {
  return [...val1, ...val2];
};

const val1 = new Set([1, 2, 3]);
const val2 = new Set([3, 4, 5]);
console.log(unions(val1, val2));
