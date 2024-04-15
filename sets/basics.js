// new Set()
// set.add('pizza')
// set.add('burger')
// set.add('pizza') // not added

// Insertion order is not stored/ memoized
// Element access and extractions via method
// Iterable (= you can use the for-of loop)
// Size (length) adjusts dynamically
// Duplicate values are not allowed (i.e unique values only)
// Deletion and finding elements is trivial and fast

const ids = new Set(); // => we can add stuff in the set()

ids.add("abs");
ids.add(1);
ids.add("bb2");
ids.add(1);

for (const el of ids) {
  console.log(el);
}

console.log(ids.has("bb2"));

ids.delete("abs");
console.log(ids);
