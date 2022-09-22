// Complete the method that takes a boolean value and 
// return a "Yes" string for true, or a "No" string for false.
function boolToWord(v) {
 
    if(typeof v === "boolean"){
        if(v) return "Yes";
        return "No";
    }
    else return `${v} n'est pas boolean`
}
 


function boolToWord(v) {
 
    if(typeof v === "boolean"){
       v == true ? "Yes" : "No";
    }
    else return `${v} n'est pas boolean`
}


