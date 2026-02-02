📘 JavaScript Set, Map, WeakSet, WeakMap – Easy Notes
1️⃣ Set
What is Set?

👉 Set stores unique values only (no duplicates).

Example
let arr = [1, 2, 3, 4, 4, 5];
let set = new Set(arr);

console.log(set); // {1,2,3,4,5}

Iterating Set (IMPORTANT)
for (let value of set) {
  console.log(value);
}


❌ Wrong:

for (let key in set) {} // ❌ does not work

Summary

No duplicate values

Iterable using for...of

Has .size
/****************************************************************************
2️⃣ Map
What is Map?

👉 Map stores data as key → value pairs.

Initializing Map (2D Array)
const map = new Map([
  ["name", "Nikhil"],
  ["age", 22],
  ["isStudent", true]
]);


✔️ This is a 2D array
✔️ Each inner array = [key, value]

Iterating Map
Best way (for...of)
for (let [key, value] of map) {
  console.log(key, value);
}

Using forEach
map.forEach((value, key) => {
  console.log(key, value);
});


⚠️ Order is (value, key) in forEach

Summary

Keys can be any type

Faster than Object

Iterable

Maintains insertion order
/****************************************************************************

3️⃣ WeakSet
What is WeakSet?

👉 WeakSet stores only objects and holds weak references.

Example
const ws = new WeakSet();

const user1 = { name: "Nikhil" };
const user2 = { name: "Amit" };

ws.add(user1);
ws.add(user2);

console.log(ws.has(user1)); // true

❌ Can we print or iterate WeakSet?

❌ NO

console.log(ws);        // WeakSet {}
for (let v of ws) {}    // ❌ Error

Why?

WeakSet supports garbage collection

No .size

No iteration allowed

Summary

Stores only objects

Not iterable

Used for memory optimization
/****************************************************************************

4️⃣ WeakMap
What is WeakMap?

👉 WeakMap stores object → value pairs.

Example
const wm = new WeakMap();

const user = { id: 1 };
wm.set(user, "Admin");

console.log(wm.get(user)); // Admin


❌ Invalid:

wm.set("name", "Nikhil"); // ❌ key must be object

❌ Iteration?

❌ Not allowed (same reason as WeakSet)

Summary

Keys must be objects

Not iterable

Supports garbage collection