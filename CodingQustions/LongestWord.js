

// function findLongestWord(str){
//      let arr=str.split(" ");
//      let ans="";
//      for(let x of arr){
//         let max=0;
//         if(x.length>max){
//             max=x.length;
//             ans=x;
//         }

//      }

//      return ans;
// }


// function findLongestWord(str){
//      let arr=str.split(" ");
//      let ans="";
//      for(let x of arr){
//         let max=0;
//         if(x.length>ans.length){
            
//             ans=x;
//         }

//      }

//      return ans;
// }


let ans=findLongestWord("I Love Coding in Javascript")
console.log(ans);




//c++ solution
// string findLongestWord(string str) {
//     string word = "", ans = "";

//     for (char c : str) {
//         if (c == ' ') {
//             if (word.length() > ans.length())
//                 ans = word;
//             word = "";
//         } else {
//             word += c;
//         }
//     }

//     // check last word
//     if (word.length() > ans.length())
//         ans = word;

//     return ans;
// }