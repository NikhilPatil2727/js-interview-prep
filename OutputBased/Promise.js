//output based questions


// console.log("start");

// const promise1=new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// })

// promise1.then((response)=>console.log(response))

// console.log("end");

//******************************************************************************** */


// console.log("start");

// const promise1=new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//    console.log(3);
// })

// promise1.then((response)=>console.log(response))

// console.log("end");

//******************************************************************************** */


// console.log("start");

// const promise1=new Promise((resolve, reject) => {
//     console.log(1);
//    console.log(3);
// })

// promise1.then((response)=>console.log(response))

// console.log("end");

//******************************************************************************** */



// console.log("start")

// const fn=()=>new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
// })


// console.log("middle");

// fn().then(response=>console.log(response))

// console.log("end");

//start
//middle
//1
//end
//success


//******************************************************************************** */


// function job(){
//     return new Promise((resolve, reject) => {
//         reject();
//     })
// }


// let promise=job();

// promise.then(function(){
//     console.log("success 1")
// })
// .then(function(){
//     console.log("success 2")
// })
// .then(function(){
//     console.log("success 3")
// })
// .then(function(){
//     console.log("success 4")
// })
// .catch(function(){
//     console.log("ERROR 1")
// }).then(function(){
//     console.log("success")
// })

//A .catch() handles the error and returns a NEW resolved promise (unless it throws another error).

//.catch() handles the error and then returns a resolved Promise by default

//******************************************************************************** */

// function job(state){
//     return new Promise((resolve, reject) => {
//         if(state){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     });
// }


// let promise=job(true);

// promise.then(function(){
//     console.log(data);
//    return job(false);
// })
// .catch(function (error) {
//     console.log(error);
//     return "error caught"
// })
// .then(function(data){
//     console.log(data);

//     return job(true);
// })
// .catch(function(error){
//     console.log(error)
// })
//******************************************************************************** */


// function job(state){
//     return new Promise((resolve, reject) => {
//         if(state){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     });
// }


// let promise=job(true);

// promise
// .then((res)=>console.log("success1"))
// .catch((error)=>console.log("error"+error))
// .then((res)=>console.log("success2"))
// .then((res)=>console.log("success3"))



// Every .then() returns a NEW Promise

// Every .then() and every .catch() returns a NEW Promise.


//output
// success1
// success2
// success3


//******************************************************************************** */

// i have learned the new thing form this example


const firstPromise=new Promise((resolve, reject) => {
    resolve("This is first promise")
})

const secondPromise=new Promise((resolve, reject) => {
    resolve(firstPromise);
})


// secondPromise.then((response)=>console.log(response))
// .catch((error)=>console.log(error))


// secondPromise.then((response)=>response)
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error))
//******************************************************************************** */


