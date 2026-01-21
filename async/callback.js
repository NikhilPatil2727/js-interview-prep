

// function greet(callback){
//    console.log("hi");
//    callback();
// }


// greet(()=>{
//     console.log("hi this is callback function ok")
// });


function step1(callback){
    setTimeout(() => {
        console.log("step 1 is completed ");
        callback();
    }, 3000);
}


function step2(callback){
    setTimeout(() => {
        console.log("step 2 is completed ");
         callback();
    }, 2000);
}

function step3(){
    setTimeout(() => {
        console.log("step 3 is completed ");
       
    }, 1000);
}


step1(()=>{
    step2(()=>{
        step3();
    })
})


//The callback hell problem is solved by Promises and async/await, which make asynchronous code easier to read, write, and maintain.


//this problem solved by promise 

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       resolve();
//     }, 8000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       resolve();
//     }, 5000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       resolve();
//     }, 1000);
//   });
// }


// step1()
//   .then(() => step2())
//   .then(() => step3())
//   .then(() => {
//     console.log("All steps completed");
//   })
//   .catch((err) => console.log(err));




