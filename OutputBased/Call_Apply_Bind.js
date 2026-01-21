//call apply bind 

// const person={
//     name:"piysh"
// }

// function sayHi(age){
//     return `${this.name} is ${age} `
// }

// console.log(sayHi.call(person,23));
// console.log(sayHi.bind(person,27));

//*************************************************************************************************** */


const age=10;

var person={
    name:"piyush",
    age:20,
    getAge:function(){
        return this.age;
    }
}

// var person2={age:24};

// console.log(person.getAge.call(person2));

//*************************************************************************************************** */

// var status="😎";

// console.log(this);

// setTimeout(()=>{
//     const status="😍";
//     const data={
//         status:"🍐",
//         getStatus(){
//             return this.status;
//         }
//     };

//     console.log(data.getStatus()); //🍐
//     console.log(data.getStatus.call(this));//😎 arrow function do not have this 
// })

//*************************************************************************************************** */

//call printAnimals such that it prints all animals in object


// const animals=[
//     {species:"Lion",name:"King"},
//     {species:"Whale",name:"Queen"},
// ]

// function printAnimals(i){
//     this.print=function(){
//         console.log("#"+i+" "+this.species+": "+this.name)
//     };
//     this.print();
// }

// for(let i=0;i<animals.length;i++){
//     printAnimals.call(animals[i]);
// }
//*************************************************************************************************** */


//Question Append the array to another array


// const array=["a","b"];

// const element=[0,1,2];

// array.push.apply(array,element)

// console.log(array)

//*************************************************************************************************** */


// const numbers=[5,6,2,3,7];

// console.log(Math.max.apply(null,numbers));


//*************************************************************************************************** */


// function f(){
//     console.log(this)
// }

// let user={

//     g:f.bind(null)
// }

// user.g();  //it will ame pattern querstio to this keyword

//*************************************************************************************************** */

// Question--> Bind Chaining


// function f(){
//     console.log(this.name);
// }

// let x=f.bind({name:"SUYESH"}).bind({name:"NIKHIL"})

// console.log(x());
//bind function do not  have the binding and all stuff
//*************************************************************************************************** */


// // This is very Tricky question 
// function checkPassword(success, failed) {
//     let password = prompt("", "");
//     if (password === "NIKHIL") {
//         success();
//     } else {
//         failed();  
//     }
// }

// let user = {
//     name: "piyush Agarwal",

//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to log in`);
//     }
// };

// // You are passing functions only, not the object (user).
// //thats why the not printed the user ok 

// checkPassword(user.loginSuccessful, user.loginFailed);





// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

//**************************************************************************** */


// function checkPassword(ok, fail) {
//     let password = prompt("", "");
//     if (password === "NIKHIL") {
//         ok();
//     } else {
//         fail();  
//     }
// }


// let user={
//     name:"NIKCS PATIL",
//     login(result){
//         console.log(this.name+(result?"Login succssuflly":"failed login"))
//     },

// }

// checkPassword(user.login.bind(user,true),user.login.bind(user,false))


//**************************************************************************** */

//call apply bind with arrow function

// let person={
//     name:"nikhil",
//     age:20,
//     getAgeArrow:()=>{
//         console.log(this);
//     },
//     getAge:function() {
//         console.log(this.age);
//     }
// }

// let person2={age:22};

// person.getAge.call(person2)
// person.getAgeArrow.call(person2)


//**************************************************** */

let car1={
    color:"red",
    company:"Range Rover"
}



function purchase(currency,price){
    console.log(
        `I Have purchased ${this.color} and ${this.company} car for ${currency} & ${price}`
    )
}

// purchase.call(car1,"Rs.","1cr")
//https://chatgpt.com/c/69478f57-6d4c-8324-b330-bdbe9fe06334


//polyfill of call

// Function.prototype.MyCall=function(context={},...args){
//       if(typeof this !=="function"){
//         throw new Error(this+"It is not callable")
//       }
    
//      context.fun=this;
//      context.fun(...args);

// }
// purchase.MyCall(car1,"rs","100000");
//polyfill of apply

// Function.prototype.myapply=function(context={},agrs=[]){
//         if(typeof this!="function"){
//             throw new Error(this);
//         }

//         if(!Array.isArray(agrs)){
//             throw new Error("this");
            
//         }
//         context.fu=this;
//         context.fu(agrs);

// }

//polyfill of bind


Function.prototype.mybind=function(context={},...agrs){
        if(typeof this!="function"){
            throw new Error(this);
        }
        
        context.fu=this;
        return function(){
             context.fu(...agrs);
        }
        

}


// const ans=purchase.mybind(car1,"rs","100000");
// ans();






