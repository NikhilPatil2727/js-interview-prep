// function abc() {
//     console.log(a,b,c);
//     const c=30;
//     let b=20;
//     var a=10;

// }

// abc();

// var x = 10;

// function name() {

//     console.log(x);
// }
// name();

// var x = 10;

// {
//   var x = 20;
//   console.log(x);
// }

// console.log(x); //20 20

// var is NOT block-scoped, it is function-scoped

// So this does NOT create a new variable.

// Instead, it updates the same x.

// Think of it as:

// var x = 10;
// x = 20;   // same variable

// function test(){
//     var a="hello";

//     if(true){
//         let a="nikcs";
//         console.log(a);
//     }
//     console.log(a);
// }

// test();

/*********************Main IMP example of variable Shadowing *************************** */

console.log(a);

{
  console.log(a);
  let a = 23;
}


o/p--> refrence


// " is block ke andar bhi ek naya a aane wala hai."

// Toh ab block ke andar global wala a band ho gaya ❌
// Block ke andar sirf naya wala a chalega.

// Isko bolte hain:

// 🔥 Shadowing (andar wala bahar wale ko chhupa deta hai)