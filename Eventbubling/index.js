

let grandParent=document.getElementById("grandparent");
let parent=document.getElementById("parent");
let child=document.getElementById("child");

// let but=document.getElementById("button");

grandParent.addEventListener('click',()=>{
    console.log("grandparent clicked");
})

parent.addEventListener('click',()=>{
    console.log("parent clicked");
})


child.addEventListener('click',(e)=>{
   
    console.log("child  clicked");
})



// but.addEventListener('click',(e)=>{
//     // e.stopImmediatePropagation();
//     console.log("button is clicked 1")
// })

// but.addEventListener('click',()=>{
    
//     console.log("button is clicked 2")
// })

// but.addEventListener('click',(e)=>{
   
//     console.log("button is clicked 3")
// })




