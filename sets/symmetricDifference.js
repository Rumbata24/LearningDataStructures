const symmetricDiff = (val1, val2) => {
  const result = new Set();

  for (const el of val1) {
    if (!val2.has(el)) {
      result.add(el);
    }
  }
  for (const el of val2) {
    if (!val1.has(el)) {
      result.add(el);
    }
  }

  return result;
};

const val1 = new Set([1, 2, 3]);
const val2 = new Set([3, 4, 5]);
console.log(symmetricDiff(val1, val2));
