// let count=0;

// (function printCount() {
//     if(count===0){
//         let count=1;
//         console.log(count);
//     }
//    console.log(count)
// })()

//Q2 Write a Function that would allow you to do this

// function createBase(a){
//     return function (b) {
//         console.log(a+b);
//     }
// }

// var addSix=createBase(6);
// addSix(10);
// addSix(21)

//Q3  Time Optimization

// function find(index){
//     let a=[];
//     for(let i=0;i<=index;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index]);
// }

// function find(){
//     let a=[];
//     for(let i=0;i<=1000000;i++){
//         a[i]=i*i;
//     }
//     return function(index){
//        console.log(a[index]);
//     }
// }

// const x=find();
// console.time("6");
// x(6);
// console.timeEnd("6")

// console.time("12");
// x(12);
// console.timeEnd("12");

// Q4  Block sope and SetTimout
//complex question
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     },i*1000);
//   }
// }

//inteveiw can ask how to print with using the var use clouser
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }

//   inner(i);
// }



//Q5 How would you use a clouser to create a priavate counter


// function counter() {
//     var counter=0;

//     function add(num) {
//         counter+=num;
//     }

//     function retrive(){
//         return "the counter is "+counter;
//     }

//     return {
//         add,retrive
//     }
// }


// const c=counter();

// c.add(4);
// console.log(c.retrive());

//Q wha is module pattern 

// var Module=(function () {
//     function privateMethod(){
//         console.log( "private")
//     }
//     return {
//         publicMethod:function(){
//             console.log("public")
//         }
//     }
// })();


// Module.publicMethod();
// Module.privateMethod();


//Q7 Make this run only ones



// let view;

// function likeThevideo(){
   

//     let called=0;

//     return function(){
     
//         if(called>0){
//             console.log("you alredy susbcribe");
//         }
//         else{
//             view="rodside coder";
//             console.log("subscribe to ",view);
//             called++;
//         }
//     }
// }

// const x=likeThevideo();
// x();
// x();
// x();


// function memoize(fn) {

//     // Step 1: memory stored using closure
//     const cache = {};

//     // Step 2: return wrapped function
//     return function (...args) {

//         // Step 3: create readable key
//         const key = JSON.stringify(args);

//         console.log("Arguments received:", args);
//         console.log("Generated key:", key);
//         console.log("Current cache:", cache);

//         // Step 4: check if value already exists
//         if (key in cache) {
//             console.log("✅ Returning result from cache");
//             return cache[key];
//         }

//         // Step 5: compute result
//         console.log("⏳ Calculating result...");
//         const result = fn(...args);

//         // Step 6: store result in cache
//         cache[key] = result;

//         console.log("📦 Stored in cache:", result);
//         return result;
//     };

// }




// const expensive = (num1, num2) => {
//     for (let i = 1; i <= 10000000; i++) {} // heavy work
//     return num1 * num2;
// };



function memoize(fn){

    let cache={};

    return function(...args){
         //check if value is alredy exits or not    
        let key=JSON.stringify(...args);

        if(key in cache){
            console.log("The value is aredy exstis bro")
            return cache[key];
        }

        let result=fn(...args);

        cache[key]=result;


         return result;

    }
}













const expensive=(num1, num2)=>{
    for(let i=0;i<10000000;i++){};
   return num1*num2;
}

const memoizedExpensive = memoize(expensive);
console.log(memoizedExpensive(5, 10)); // slow (calculation)
console.log(memoizedExpensive(5, 10)); // fast (cache)
console.log(memoizedExpensive(6, 10)); // slow (new input)







