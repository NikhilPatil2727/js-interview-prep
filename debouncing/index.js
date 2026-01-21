
let counter=0;

function getData(){
    console.log("fetched data",counter++);
}

function debounce(callback,dely){
   let timer;
    return function(){
         
        if(timer) clearTimeout(timer);
        
        timer=setTimeout(() => {
            callback();
        }, dely);
    }
}


//**************************************************************************************************************** */


let result=debounce(getData,1000);



// function Throt(callback,dely){

//     return function(){

//         document.getElementById("btn").disabled=true;
//         setTimeout(() => {
//             callback();
//         }, dely);
//     }
// }




// let neFun=Throt(()=>{
//     document.getElementById("btn").disabled=false;
//     console.log("cliked")
// },5000)