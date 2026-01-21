


let arr=[1,2,3,4,5,6];

arr.map((arr,i)=>{})

// Array.prototype.mayMap=function(callback){
//     let temp=[];

//     for(let i=0;i<this.length;i++){
//         let value=callback(this[i],i);
//         temp.push(value);
//     }
//     return temp;
// }

//this.length points to the array on which mayMap() is called.


// const ans=arr.mayMap((arr,i)=>arr*2);
// console.log(ans);




// Array.prototype.myFilter=function(callback){
//     let temp=[];

//     for(let i=0;i<this.length;i++){
//         let value=callback(this[i],i);
//         if(value){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }


// const ans=arr.myFilter((num)=>num>1);
// console.log(ans);





Array.prototype.myreduce=function(callback,intialvalue){
    let acc=intialvalue;
    for(let i=0;i<this.length;i++){
        acc=acc?callback(acc,this[i]):this[i];
    }

    return acc;
}


// let ans=arr.myreduce((acc,arr)=>acc+arr,0);
// console.log(ans);


let student=[
    {name:"nikhil",rollNumber:31,marks:80},
    
    {name:"pranav",rollNumber:33,marks:69},
    
    {name:"Suyash",rollNumber:34,marks:35},
    
    {name:"siddanth",rollNumber:35,marks:55}
]

// const ans=student.map((data)=>data.name.toUpperCase());
// 

// const ans=student.filter(item => item.marks>60 && item.rollNumber>15)

// 

// const ans=student.reduce((acc,item)=>acc+item.marks,0);
// console.log(ans);
const ans=student.map((item)=>item.marks<60?{...item,marks:item.marks+20}:item).filter(item => item.marks>60).reduce((acc,item)=>acc+item.marks,0);
console.log(ans);


