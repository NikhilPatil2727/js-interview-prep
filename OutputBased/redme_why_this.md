Code
Array.prototype.show = function () {
  return this;
};

Why we use this here? 🤔

👉 this points to the array that calls the function.

How?

When you write:

[1, 2, 3].show();


JavaScript does this internally:

show.call([1, 2, 3]);


So inside show():

this === [1, 2, 3]

In one easy line (remember this 🧠)

In a polyfill, this refers to the object (array) on which the method is called.


*****************************************************************************

YES bro 🔥 100% correct 👌

Short & clear answer:

👉 Because in JavaScript, arrays are objects.

That’s why this works:
Array.prototype.show = function () {
  return this;
};


When you do:

[1, 2, 3].show();


[1,2,3] is an object

JS sets this to that object

So this === [1,2,3]

One-line interview answer 🧠

Arrays are objects in JavaScript, so when an array calls a prototype method, this refers to that array object.

Perfect doubt bro — this means you’re thinking in the right JS internals way 😄
*****************************************************************************
also function 

Yes bro 💯 functions also 😄

Super-easy line:

👉 In JavaScript, functions are also objects.

That’s why this works:
function hello() {}
hello.name;      // property
hello.length;    // property

And why this is possible:
Function.prototype.myMethod = function () {
  return "I am a function object";
};

hello.myMethod(); // works

One-line interview combo answer 🧠

In JavaScript, arrays and functions are objects, so they can have properties, methods, and prototype chaining.