
function removeWhiteSpace(str){

    let ans="";

    for(x of str){
        if(x==' '){
            continue;
        }
        else{
            ans+=x;
           
        }

    }
    return ans;
}







console.log(removeWhiteSpace("Interview,     happy"))