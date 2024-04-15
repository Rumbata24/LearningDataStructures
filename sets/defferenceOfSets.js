const diff = (val1, val2) => {
  const result = new Set();

  val1.forEach((el) => {
    if (!val2.has(el)) {
      result.add(el);
    }
  });

  return result;
};

const val1 = new Set([1, 2, 3]);
const val2 = new Set([3, 4, 5]);
console.log(diff(val1, val2));
