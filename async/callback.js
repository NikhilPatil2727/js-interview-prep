// function greet(callback){
//    console.log("hi");
//    callback();
// }

// greet(()=>{
//     console.log("hi this is callback function ok")
// });

// function step1(callback){
//     setTimeout(() => {
//         console.log("step 1 is completed ");
//         callback();
//     }, 3000);
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("step 2 is completed ");
//          callback();
//     }, 2000);
// }

// function step3(){
//     setTimeout(() => {
//         console.log("step 3 is completed ");

//     }, 1000);
// }

// step1(()=>{
//     step2(()=>{
//         step3();
//     })
// })

//The callback hell problem is solved by Promises and async/await, which make asynchronous code easier to read, write, and maintain.

//this problem solved by promise

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log("Step 2 completed");
       reject();
    }, 2000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
       console.log("Step 3 completed");
      resolve();
    }, 3000);
  });
}


// const result = async () => {
//   try {
//     let message1 = await step1();
//     console.log(message1)

//     let message2 = await step2(); // ❌ error here
//     console.log(message2);

//     let message3 = await step3(); // ❌ never runs
//     console.log(message3);

//   } catch (error) {
//     console.log("Caught Error:", error);
//   }
// };

// result();

//alos called promise chaining

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("completed"))
  .catch((err) => console.log("Error is alos prinited "+err)).
  then(()=>console.log("hacker"))
