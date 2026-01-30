
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



