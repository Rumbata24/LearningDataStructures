// new Map();
// map.set("name", "Max");
// map.set(true, true); //Boolean key

// Ordered key-value pairs of data
// Element access via key
// Iterable (= you can use the for-of loop)
// Keys are unique, values are not
//  Keys can be anything (including reference values like arrays)
// Pure data storage, optimized for data access

const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("lastResult", undefined);

console.log(resultData);

const germany = { name: "Germany", population: 82 };
resultData.set(germany, 0.89);
console.log(resultData);

for (const el of resultData) {
  console.log(el);
}

resultData.set('average', 33.89)
console.log(resultData);

console.log(resultData.get('average'));

resultData.delete(germany)
console.log(resultData);