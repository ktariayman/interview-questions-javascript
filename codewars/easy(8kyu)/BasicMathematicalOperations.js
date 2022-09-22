function basicOp(operation, value1, value2)
{
  // Code
    if(!operation || !value1 || !value2) return 'input invalid'
    if(operation ==='+') return value1 + value2
    if(operation ==='-') return value1 - value2
    if(operation ==='*') return value1  *value2
    if(operation ==='/') return value1 / value2
}
 

// other coder's solutions

//use eval build in function : clever solution
function basicOp(o, a, b) {
    return eval(a+o+b);
}
// using SwitchStatement ..
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
// create oject with key operation and value equal the result 
// all we need to do is return the value of the key ( which is operation)
// good one 
function basicOp(operation, value1, value2)
    {
    var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
};
return cases[operation]
}