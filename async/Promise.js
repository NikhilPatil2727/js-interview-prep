
// let p1= new Promise((resolve,rejected)=>{
//     setTimeout(() => {
//         resolve("the promise is resolved suucessfully");
//     }, 2000);
// })



// p1.then((data)=>console.log(data)).
// catch((err)=>console.log(err));


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1");
    }, 6000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("task 2");
    }, 100);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("task 3");
    }, 5000);
});











Promise.all([p1,p2,p3]).
then((response)=>console.log(response)).
catch((err)=>console.log(err));









// p1.then((data)=>console.log(data));
// p2.then((data)=>console.log(data));
// p3.then((data)=>console.log(data));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


