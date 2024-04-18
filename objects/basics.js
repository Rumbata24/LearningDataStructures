const obj = {
  name: "Max",
  age: 31,
  greet() {
    console.log("Hi there!");
  },
};

// Unordered key-values pairs of data
// Element access via key (property name)
// Not iterable (only with for-in)
// Keys are unique, values are not
// Keys have to be strings, numbers or symbols
// Can store data & "functionality" (methods)

const person = {
  firstName: "Max",
  age: 31,
  hobbies: ["Sort", "Cooking"],
  greetings() {
    console.log("Hello there!");
  },
};

console.log(person["firstName"]);

person.lasName = "Scwarz";

delete person.age;
console.log(person);
person.greetings();
