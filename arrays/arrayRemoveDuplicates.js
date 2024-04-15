const removeDuplicates = (num) => {
  return num.filter((value, index) => num.indexOf(value) === index);
};

const num = [1, 2, 3, 2, 4, 3, 5];

console.log(removeDuplicates(num));
