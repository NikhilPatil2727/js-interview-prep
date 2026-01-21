

// var arr=[1,2,3,4,5];
// console.log(this);

//when se declare let arr=[1,2,3,4]

//it will not shown in the window object

// var creates a property on the global object (window)
// 👉 so var arr = [...] becomes window.arr

// let (and const) create a block-scoped variable, NOT attached to window
// 👉 so let arr = [...] is not window.arr


//**************************************************************************************************
// 







//*********************************MAP*************************************** */

// Array.prototype.myMap=function(callback){
//    let temp=[];
//    for(let i=0;i<this.length;i++){
//     let value=callback(this[i]);
//     temp.push(value);
//    }

//    return temp;
// }

// const ans=arr.myMap(item => item*8);
// console.log(ans);


//*********************************filter*************************************** */





// Array.prototype.myMap=function(callback){
//    let temp=[];
//    for(let i=0;i<this.length;i++){
//     let value=callback(this[i]);
//     if(value){
//       temp.push(this[i]);
//     }
//    }

//    return temp;
// }
// const ans=arr.filter(item => item>2);
// console.log(ans);


//************************************Reduce****************************************** */

let arr=[1,2,3,4,5];




// Array.prototype.myReduce=function(callback,intialValue){
    
// let acc=intialValue;
//       for(let i=0;i<this.length;i++){
//           acc=acc?callback(this[i],acc):this[i];
//       }
//       return acc;
// }

// const ans=arr.myReduce((acc,item)=>acc+item,0)
// console.log(ans);








