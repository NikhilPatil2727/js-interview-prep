

function isAnagrams(str1,str2){
      let arr1=str1.split('');
      let arr2=str2.split('');

      let ans=arr1.sort().join();
      let ans2=arr2.sort().join();

      return ans===ans2;
}


console.log(isAnagrams("slinet","listen"))




// bool isAnagram(string s1, string s2) {
//     if (s1.length() != s2.length())
//         return false;

//     int freq[26] = {0};   // for lowercase a-z

//     // count characters of s1
//     for (char ch : s1) {
//         freq[ch - 'a']++;
//     }

//     // subtract characters of s2
//     for (char ch : s2) {
//         freq[ch - 'a']--;
//     }

//     // check if all counts are zero
//     for (int i = 0; i < 26; i++) {
//         if (freq[i] != 0)
//             return false;
//     }

//     return true;
// }