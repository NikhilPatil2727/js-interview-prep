

What is Variable Shadowing?

let x = 10;  

{
  let x = 20;
  console.log(x);
}

console.log(x); // 👉 10

/***********************************************************************************************
Illegal Shadowing
variable declared with let or const is shadowed by var

let x = 10;

{
  var x = 20; // ❌ Illegal Shadowing
}

/*********************************************************************

hoisting related things
When a JavaScript program starts, the Global Execution Context is created and pushed onto the Call Stack first.

In JavaScript, functions are objects, and they are stored in the Heap.



/*********************************************************************
clear all confusing realted scope

function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // ✅ (function scope)
    console.log(b); // ❌ Error (block scope)
    console.log(c); // ❌ Error (block scope)
}


