// let obj = {
//   name: "NIKHIL",
//   age: 27,
//   x: {
//     myname: "NIKCS27",
//     greet: function () {
//       console.log(this.myname + " " + this.name);
//     },
//   },
// };

// obj.x.greet();

////******************************************************************** */

// function makeUser(){
//     return {
//         name:"nikhil",
//         ref:this
//     }
// }

// function makeUser(){
//     return {
//         name:"nikhil",
//         ref(){
//           return this.name
//         }
//     }
// }


// let user=makeUser();

// console.log(user.ref());

////******************************************************************** */

// const User = {
//   name: "NIKHIL PATIL",
//   logMessage: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(User.logMessage,1000);

// called wtihout object

// setTimeout(() => {
//   User.logMessage
// }, 1000);


// User.logMessage   // function exists, but not executed
// User.logMessage() // function runs ✅

// I am passing only reference, not calling it”

// This line just returns the function reference.
// It does NOT execute it.

// A function reference cannot execute by itself.
// It must be CALLED using () to run.

//It will Pointing to the window object it will point Sepertly running like 


// “It points to the window object because the method is executed separately, not as part of the User object.”

////******************************************************************** */

// Question 4
//create and object Calculator

// let calculator = {
// //   a: 20,
// //   b: 30,

// // understand why the this.a and this.b is written inside the function
//   read: function () {
//     // console.log(this.a + " " + this.b);
//        this.a=Number(prompt("a"))
//        this.b=Number(prompt("b"))

//   },
//   sum: function () {
//     return this.a+this.b
//   },
//   mul:function(){
//     return this.a*this.b;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


////******************************************************************** */


// var length=4;


// function callback(){
//     console.log(this.length)
// }


// const object={
//     length:5,
//     Greet:function(callback){
//         callback()
//     }
// }
// object.Greet(callback);



// Is detached from object

// Runs independently

// Is not a method call

// The callback function is executed separately, not as a method of the object, so this refers to the global object.

//******************************************************************** */

//Senior Engineer question 

// var length=4;


// function callback(){
//     console.log(this.length)
// }


// const object={
//     length:5,
//     Greet:function(callback){
//       console.log(arguments)
//         arguments[0]()
//     }
// }
// object.Greet(callback,1,2);

// in internally they where saved as object

// because
// arguments = {
//   0: callback,
//   1: 1,
//   2: 2,
//   length: 3
// }

//that wahy the outptu is 3 

// arguments is an object that behaves like an array, and since the function is called using arguments[0](), this points to the arguments object.
// Because arguments.length is 3, the output is 3.







////******************************************************************** */

const cal={
    total:0,
    add:function(a){
       this.total+=a;
       return this
    },
    // multiply:function(b){
    //     this.total*=b
    //     return this;
    // }

}


const result=cal.add(5);
console.log(result);


