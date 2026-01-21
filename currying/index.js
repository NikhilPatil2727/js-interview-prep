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
