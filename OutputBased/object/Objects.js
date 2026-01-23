
// const func=(function(a){
//     delete a;
//     return a;                 
// })(5)

// console.log(func)

//simply vo function hai not a object 
// delete only works on object properties

// It does NOT delete local variables or function parameters

//****************************************************************** */
// let property="age";

// let obj={
//     "name":"nikhil",
//     [property]:45
// }

// obj[property]=45
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj["age"]);

// console.log(obj);


//****************************************************************** */

// let obj={
//     name:"NICKS",
//     age:45,
//     id:50,
//     salary:7000
// }


// for(let data in obj){
//     console.log(data,obj[data])
// }


//****************************************************************** */

// const obj={
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(obj);

// output--->>{ a: 'three', b: 'two' }
//If an object has duplicate keys, the last one wins.


//****************************************************************** */
// let nums={
//     a:100,
//     b:200,
//     title:"my nums"
// }

// function multiplybyTwo(obj){

//     for(key in obj){

//         if(typeof(obj[key])!="string"){
//             obj[key]=obj[key]*2;
//         }
//         console.log(obj[key]);
//     }
// }


// multiplybyTwo(nums)


//****************************************************************** */

// const a={};
// const b={key:"b"};
// const c={key:"c"};

// a[b]=123;
// a[c]=456;

// console.log(a);


// a["[object Object]"] = 123;
// a["[object Object]"] = 456; // overwrites


// If b & a is a string → used directly

// If b & a is a number → converted to string

// If b is an object → converted to string ("[object Object]")

// Object keys are always strings (or symbols)
//so it overlaps it 

//****************************************************************** */

//what is json.strigfy json parse


// let obj={
//     name:"Nikhil",
//     age:22,
//     college:"SITCOE"
// }

// const x=JSON.stringify(obj);

// let objects=JSON.parse(x);

// console.log(objects)

// real world use case of JSON.stringify
// Sending data to backend



//localStorage can store only strings.
// const user = { name: "Nikhil", theme: "dark" };

// localStorage.setItem("user", JSON.stringify(user));


//****************************************************************** */
// what is the output ??
// console.log([..."nikhil"]);

//****************************************************************** */


//what is the output of this ??
// const setting={
//     username:"nicks",
//     level:19,
//     health:20
// }
// const data=JSON.stringify(setting,["level","health"]);

// console.log(data);



// Key concept: Second argument of JSON.stringify

// JSON.stringify(value, replacer)


// ONLY those keys are included in the JSON output

// What happens here
// ["level", "health"]


// So JSON.stringify:

// ❌ ignores username

// ✅ includes level

// ✅ includes health

//****************************************************************** */

const shape={
    radius:10,
    dimeter(){
        return this.radius*10;
    },
    perimeter:()=>2*Math.PI*this.radius,
}

// console.log(shape.dimeter());
// console.log(shape.perimeter());
//****************************************************************** */

//Nested Destructring 

// const obj={
//     name:"Nikhil",
//     age:27,
//     fullName:{
//         first:"NICKS27"
//     }
// }


// const {fullName:{first}}=obj

// console.log(first);

//****************************************************************** */



// function getItems(fruitList,favoriteFruit,...args){
//     return [...fruitList,...args,favoriteFruit]
// }

// const data=getItems(["bananan","apple"],"pear","orange");

// console.log(data);

//...args must be ate last 
//getItems(fruitList,favoriteFruit,...args)


//****************************************************************** */

//what is the output ??

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

//false
//false
//the ref is diff 

//****************************************************************** */


// let person={name:"Lydia"};

// const members=[person];

// // person=null;
// person.name=null;

// console.log(members);



//****************************************************************** */

//keep in mind x is defult parameter
// const value={number:10}

// const multiply=(x={...value})=>{
//     console.log((x.number*=2))
// }


// multiply();//20--> 
// multiply();//20---. value not changed beacuse of spread operator 
// multiply(value);//20
// multiply(value);//40 --- changed beacause of you passing the same reference 
//****************************************************************** */



// function changeAgeAndReferance(person){
//     person.age=25;

//     person={
//         name:"NIKHIL",
//         age:50,
//     }

//     return person;

// }

// const personObj1={
//     name:"Alex",
//     age:30
// }


// const personObj2=changeAgeAndReferance(personObj1)

// console.log(personObj1)
// console.log(personObj2)


//****************************************************************** */





//shallow copy

let Obj={
    name:"Nikhil",
    address:{
        city:"ichalkranji"
    }
}

// let ShalloCopy={...Obj}
// let ShalloCopy=Object.assign({},Obj)
Obj.address.city="kolhapur"
console.log(ShalloCopy.address.city);




// Deep Copy Example – Method 1 (Most Common)

// Using JSON.parse(JSON.stringify())
let Obj = {
  name: "Nikhil",
  address: {
    city: "ichalkranji"
  }
};

let DeepCopy = JSON.parse(JSON.stringify(Obj));

Obj.address.city = "kolhapur";

console.log(DeepCopy.address.city); // ichalkranji ✅