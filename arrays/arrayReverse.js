const reverseArr = (num) => {
  //   return num.reverse();

  const reversed = [];

  for (let i = num.length - 1; i >= 0; i--) {
    reversed.push(num[i]);
  }

  return reversed;
};

const num = [1, 2, 3, 4, 5];

console.log(reverseArr(num));
