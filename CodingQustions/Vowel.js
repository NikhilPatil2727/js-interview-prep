

function countVowels(str){
    let count=0;
    for(x of str){
        if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'){
            count++;
        }

    
    }

    return count;
}



console.log(countVowels("hello, world "));