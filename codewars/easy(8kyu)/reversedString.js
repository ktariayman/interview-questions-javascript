// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// my solution : 

  
// create new variable 
// loop from the last element on the string ( input)
// add the element to the new variable
function solution(str){
    let reversed = "";      
     for (var i = str.length - 1; i >= 0; i--){         
       reversed += str[i];  
     }     
    return reversed;}

const solution = (str) => {
        return str.split('').reverse().join('');  
        // return str.[...str].reverse().join('');  
}


const solution = (str) => {
    // return str.split('').reverse().join('');  
    return [...str].reverse().join('');  
}