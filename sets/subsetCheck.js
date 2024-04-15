const subset = (val1, val2) => {
  for (const el of val1) {
    if (!val2.has(el)) {
      return false;
    }
  }

  return true;
};

const val1 = new Set([1, 2]);
const val2 = new Set([1, 2, 3, 4, 5]);
console.log(subset(val1, val2));
