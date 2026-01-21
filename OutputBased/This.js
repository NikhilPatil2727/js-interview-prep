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

// let user=makeUser();

// console.log(user.ref.name);

////******************************************************************** */

const User = {
  name: "NIKHIL PATIL",
  logMessage: function () {
    console.log(this.name);
  },
};

// setTimeout(User.logMessage,5000);
// called wtihout object
// setTimeout(() => {
//   User.logMessage();
// }, 5000);
//the function is called with object

// You are passing only the function, not the object.

// When setTimeout calls it, this does not refer to User anymore.

// So this.name becomes undefined.

////******************************************************************** */

// Question 4
//create and object Calculator

// let calculator = {
// //   a: 20,
// //   b: 30,
//   read: function () {
//     // console.log(this.a + " " + this.b);
//       this.a=prompt("a")
//       this.b=prompt("b")

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

//It prints 4 because callback() is called as a normal function, not as a method of object


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


