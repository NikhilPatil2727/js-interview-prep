//set store the unique values 
let arr=[1,2,3,4,4,5];

let x=new Set(arr);

console.log(x);

// for (let data of x){
//     console.log(data);
// }

x.forEach((value) => {
  console.log( value);
});




// let map=new Map();

// map.set("name","nicks");
// map.set(1,"pranav");


// console.log(map)

// Correct way to initialize Map

// 👉 Map constructor takes an array of key–value pairs.

// Basic syntax
const map = new Map([
  ["name", "Nikhil"],
  ["age", 22],
  ["isStudent", true]
]);

console.log(map.get("name")); // Nikhil

map.forEach((value, key) => {
  console.log(key, value);
});


let a=["a","b","c","d"];


// let map=new Map();

// for(let x of a){
//    map.set(x,(map.get(x)||0)+1);
// }

// console.log(map);

// weak map

// let obj = { name: "Nicks" };

// const wm = new WeakMap();
// wm.set(obj, 50);

// console.log(wm);

//weak set only store the objects and both map and set can not be iterated


// let user = { name: "Nicks" };

// const ws = new WeakSet();
// ws.add(user);

// console.log(ws.has(user)); // true

// user = null; 




// WeakSet uniqueness is based on object reference, not object content.
// &Same with WeakMap
