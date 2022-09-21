 // Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(typeof number !== "number") return 'typeof input is not number'
    return number%2 == 0 ? "Even" : "Odd";
}