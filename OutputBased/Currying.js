//why we use crrying ??
//Curried function (avoid repeating same variable)

// function greet(greeting, name) {
//   return greeting + ", " + name;
// }

// greet("Hello", "Nikhil");
// greet("Hello", "Rahul");
// greet("Hello", "Amit");

// function greet(greeting) {
//   return function (name) {
//     return greeting + ", " + name;
//   };
// }

// var sayHello = greet("Hello"); // greeting stored once

// sayHello("Nikhil");
// sayHello("Rahul");
// sayHello("Amit");

/*********************************************************************** */

// Question-1  sum(2)(6)(1)

function f(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// const ans=f(2)(6)(8);
// console.log(ans);

/*********************************************************************** */

// Question 2-
//evaluate("sum")(4)(2)=>6
//evaluate("multiply")(4)(2)=>8
//evaluate("divide")(4)(2)=>2
//evaluate("substract")(4)(2)=>2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "sum") return a + b;
      else if (operation == "multiply") return a * b;
      else if (operation == "divide") return a / b;
      else if (operation == "substract") return a - b;
      else return "invalid operation";
    };
  };
}

// console.log(evaluate("sum")(5)(5))

// const ans=

// console.log(ans)

// let ans=evaluate("multiply")
// let result=ans(5)(5)
// console.log(result);

// console.log(ans(5)(7))
// console.log(ans(8)(7))

//we can use multiple time
/*********************************************************************** */

//question 3-- infinite currying sum(1)(2(3).........(n)

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);

//     return a;
//   };
// }


// let ans=sum(1)(2)(3)(4)(5)

// console.log(ans());
/*********************************************************************** */


//currying vs Partial application

// Feature	    Currying	       Partial Application
// Arguments	One at a time	   Some at once

function Sum(a){
    return function(b,c){
        return a+b+c;
    }
}



// const x=Sum(10);

// console.log(x(10,10))


/*********************************************************************** */

// Qusetion 5-Manupulating the DOM 


// function updateDOM(id){
//     return function(content){
//         document.getElementById(id).textContent=content;
//     }

// }
// let update=updateDOM("heading");
// update("hello ji");



