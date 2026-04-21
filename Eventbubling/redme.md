
// Event Bubbling in JavaScript--> Events are executing button to up;
or you can say that events are fired form bottom to up 

capturing phase--> it is opposite of bubbling it is executing from up to down











// event.target vs this.target vs event.currentTarget

// event.target--> it will be point to perticuler event when you click
// event.currntTarget--> it will point to the which evnet is executing
// this.target --> it will point to the which evnet is executing


// event.target → clicked element

// event.currentTarget → element handling the event

// this → same as currentTarget (not in arrow functions)


event.stopPropagation()-->It stops the event from bubbling up to parent elements.



It does everything that `stopPropagation()` does AND:

👉 **Also stops other event listeners on the SAME element.**


const btn = document.getElementById("btn");

What is stopImmediatePropagation() in JavaScript?

👉 It is used to completely stop an event from running any more listeners

🧠 Simple Meaning:

It stops:

❌ Other event listeners on the same element
❌ Event going to parent (bubbling)





btn.addEventListener("click", () => {
  console.log("First listener");
});

btn.addEventListener("click", (e) => {
  console.log("Second listener");
  e.stopImmediatePropagation(); // 🚫 stops everything after this
});

btn.addEventListener("click", () => {
  console.log("Third listener");
});

