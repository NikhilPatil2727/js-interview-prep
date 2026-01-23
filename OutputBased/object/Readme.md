


function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();        // Hello Guest
greet("Nikhil"); // Hello Nikhil






Default object as parameter

function createUser(user = { name: "Guest", age: 18 }) {
  console.log(user);
}

createUser();
 { name: "Guest", age: 18 }

createUser({ name: "Nikhil", age: 22 });
{ name: "Nikhil", age: 22 }




one object holds the Ref to another object that called shllow copy 



