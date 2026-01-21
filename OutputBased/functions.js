

//what are first class functions 


//they are treated like normal variables

// function square(num){
//     return num*num;
// }

// function displyfunction(fn){

//     console.log("The sqare is"+fn(5));
// }


// displyfunction(square);


//what is an IFFI function

// (  
// function square(num){
// console.log(num*num);
// }
// )();


const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
   
  console.log(x);
  var x="nikhil"
}

// console.log("Outside function");
// console.log(x);




// for(var i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
// }

//The loop runs very fast

// setTimeout does not run immediately
// → it goes to the event queue

// By the time setTimeout callbacks execute:

// the loop has already finished

// i value has become 5

// All callbacks share the same i

// So every console.log(i) prints 5





// let is block-scoped

// Each iteration gets a new i


// functionName();

// function functionName(){
//     console.log(x);
//     var x=5;
//     console.log("roadside coder");

// }






    // var x=21;

    // fun();
    // function fun(){
    //     console.log(x);
    //     var x=23;
    // }
//👉 In the first case, var x inside the function is hoisted and shadows the global x, so undefined is logged;

//in the second case, no local x exists, so JavaScript reads x from the global scope and logs 21.




//creates a seperate execution context for that function /local scope that why they printed undefined 



//Arrow functoins vs Reguler functions

// 1-syntax
// function square(num){
//     return num*num;
// }


// const square=(num)=>{
//     return num*num;
// }


//implicit return 

// const square=num=>num*num;



//Arguments

// function fun(){
//     console.log(arguments);
// }

// fun(1,2,3,3);


// const fn=()=>{
//     console.log(arguments);
// }

// fn();



