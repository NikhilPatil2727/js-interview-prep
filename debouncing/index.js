
let count=0;
function getData() {
    
    console.log("function is called",count++)
}

function debouncing(callback,dely){
    let time;
    return function(){
        if(time) {clearTimeout(time)}

       time=setTimeout(() => {
        callback();
       }, dely);
    }
}

let result=debouncing(getData,1000)

//**************************************************************************************************************** */


function Throt(callback,dealy){
    return function(){
        document.getElementById("btn").disabled=true;
        setTimeout(() => {
            callback();
        }, dealy);
    }
}



let neFun=Throt(()=>{
   document.getElementById("btn").disabled=false;
},3000);