const intersection = (val1, val2) => {
  //   const inter = [];
  //   for (const el of val1) {
  //     for (const el2 of val2) {
  //       if (el === el2) {
  //         inter.push(el);
  //       }
  //     }
  //   }
  //   return inter;

  const inter = new Set();
  val1.forEach((el) => {
    if (val2.has(el)) {
      inter.add(el);
    }
  });
  return inter;
};

const val1 = new Set([3, 2, 7]);
const val2 = new Set([7, 3, 5, 4]);
console.log(intersection(val1, val2));
