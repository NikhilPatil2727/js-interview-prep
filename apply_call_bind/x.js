
// call, apply, and bind are used to control the this keyword in JavaScript.


let a={
    name:"nikhil",
    age:24,
   
}

// let x=function(state,city){
//     console.log(this.name+" "+state+" "+city);
// }

function x(state,city){
   console.log(this.name+" "+state+" "+city);
}

let b={
    name:"Pranav",
    age:24,
}

x.call(b,"maharashtra","ichalkranji");
x.apply(a,["maharashtra","ichalkranji"]);

let ans=x.bind(a,"maharashtra","ichalkranji")
ans();


