const users = [
  {
    id: 1,
    name: "Nikhil",
    isActive: true,
    age: 21
  },
  {
    id: 2,
    name: "Rahul",
    isActive: false,
    age: 25
  },
  {
    id: 3,
    name: "Priya",
    isActive: true,
    age: 23
  },
  {
    id: 4,
    name: "Sneha",
    isActive: false,
    age: 20
  }
];
// users.forEach((data)=>console.log(data.name));

// let Result=users.filter((data)=>data.isActive==true).map((data)=>data.name)

// let Result=users.filter((data)=>{
//     if(data.isActive==true){
//         return true 
//     }
// })
// console.log(Result);



// const Result=users.sort((item1,item2) => item2.age - item1.age);
// console.log(Result);

// const Result=users.sort((item1,item2) => item1.age - item2.age);
// console.log(Result);





//************************************************************************************************************** */


// const result=users.some((data)=>data.name=="Rahul")

const result=users.some((data)=>{
  if(data=="nikhil"){
    return true;
  }
})
// const result=users.find((data)=>data.name=="Nikhil");

// const result=users.findIndex((data)=>data.name=="Nikhil");

// const result=users.findIndex((data)=>data.age==25);


// console.log(result);
// For the react


// Create → use spread operator

// Read / Filter → use filter()

// Update → use map() with ternary

// Delete → use filter()


let arr=[1,2,2,3,3,4,4,5,6]

let uniqeArr=[];


arr.forEach((ele)=>{
    if(!uniqeArr.includes(ele)){
       uniqeArr.push(ele);
    }
})


console.log(uniqeArr);
