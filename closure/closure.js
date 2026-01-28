
//clousre having a access of global variable 

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20





// function greet(){
//     let name="NIKHIL"
//     function names(){
//         console.log(name);
//     }
//     return names;
// }


// const data=greet();
// data();


// console.log(typeof ("5" + 2));
// console.log(typeof(5 + true));  
// console.log(typeof("5" * 2));  



 

