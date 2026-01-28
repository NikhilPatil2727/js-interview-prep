//why we use crrying ??
//Curried function (avoid repeating same variable)

//Currying transforms a multi-argument function into a chain of 
// single-argument functions, allowing partial application and better reusability.


// Partial Application
// Partial application is when a function is called with 
// some arguments first and the remaining arguments later


// function greet(a,b,c){
//     return a+b+c;
// }

// let ans=greet(1,2,3);
// console.log(ans);

// function greet(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

function greet(a) {
  return function (b) {
    if (b) {
      return greet(a + b);
    }

    return a;
  };
}

let ans=greet(1)(2);
// console.log(ans());
// console.log(result);


//insted of this 

// console.log(ans());
