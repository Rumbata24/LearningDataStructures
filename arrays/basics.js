const names = ["Max", "Manu", "Julie", "Max"];

// Index starts at zero

console.log(names[1]);
console.log(names.length);

for (const el of names) {
  console.log(el);
}

// add
names.push("Julie");
console.log(names.length);

// find
const julieIndex = names.findIndex((el) => el === "Julie");
console.log(julieIndex);

// delete
const del = names.splice(2, 1);
console.log(del);
console.log(names);
