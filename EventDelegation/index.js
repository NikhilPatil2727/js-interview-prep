
// What is Event Delegation? (1-line)

// Event delegation means adding ONE event listener to a parent instead of adding many listeners to each child.

let p=document.getElementById("parent")

p.addEventListener('click',(e)=>{
    console.log(e.target);
})
