const sum = (num) => {
  const total = 0;

  const sumNum = num.reduce((acc, curr) => acc + curr, total);
  return sumNum;
};

const num = [1, 2, 3, 4, 5];

console.log(sum(num));
