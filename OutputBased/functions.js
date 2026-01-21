

//what are first class functions 


//they are treated like normal variables

// function square(num){
//     return num*num;
// }

// function displyfunction(fn){

//     console.log("The sqare is"+fn(5));
// }


// displyfunction(square);
/****************************************************************************************************** */


//what is an IFFI function

// (  
// function square(num){
// console.log(num*num);
// }
// )();

/****************************************************************************************************** */

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
   
  console.log(x);
  var x="nikhil"
}

// console.log("Outside function");
// console.log(x);


/****************************************************************************************************** */


// for(var i=0;i<5;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
// }

//The loop runs very fast


// var is function-scoped, NOT block-scoped

// var i creates only one variable i

// The loop does not create a new i each time

// setTimeout runs later, not immediately

// setTimeout does not run inside the loop


// let is block-scoped

// Each iteration gets a new i
/****************************************************************************************************** */


functionName();

function functionName(){
    console.log(x);
    var x=5;
    console.log("roadside coder");

}


/****************************************************************************************************** */



    // var x=21;

    // fun();
    // function fun(){
    //     console.log(x);
    //     var x=23;
    // }

//     ┌─────────────────────────┬─────────────────────────────┐
// │   GEC – Memory Phase    │   GEC – Execution Phase     │
// ├─────────────────────────┼─────────────────────────────┤
// │ x   → undefined         │ x = 21                      │
// │ fun → function() {...} │ fun() is called             │
// └─────────────────────────┴─────────────────────────────┘


// ┌─────────────────────────┬─────────────────────────────┐
// │   FEC – Memory Phase    │   FEC – Execution Phase     │
// ├─────────────────────────┼─────────────────────────────┤
// │ x → undefined           │ console.log(x) → undefined │
// │                         │ x = 20                      │
// └─────────────────────────┴─────────────────────────────┘


//creates a seperate execution context for that function /local scope that why they printed undefined 

/****************************************************************************************************** */


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


//check the output in console
// The arguments Are Recieced

// fun(1,2,3,3);


// const fn=()=>{
//     console.log(arguments);
// }

// fn();



// Arrow functions do NOT have their own this.
// They take this from the outer (lexical) scope.



