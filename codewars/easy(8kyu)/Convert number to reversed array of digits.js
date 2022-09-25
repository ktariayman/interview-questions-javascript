// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


//change n to string , 
// split to an array , 
// return the values in the array to Number  
// then reverse
function digitize(n) {
    return n.toString().split('')
    .map((m) => Number(m))
    .reverse()
    
}
