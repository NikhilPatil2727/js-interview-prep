


function reverseString(str){
    let name=str.split('');
    console.log(name);
   let i=0, j=name.length-1;

   while(i<j){
    let temp=name[i];
    name[i]=name[j];
    name[j]=temp;

    i++,j--;
   }
   return  name.join();
}

// Method 2
// return str.split('').reverse().join('');

const ans=reverseString("nikhil patil");
console.log(ans);



// what you learn from this 

//1️⃣ split() — String ➜ Array

//2️⃣ join() — Array ➜ String
