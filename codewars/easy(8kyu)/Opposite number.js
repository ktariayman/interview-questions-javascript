// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    if(typeof number !== "number") return 'typeof input is not number'
    return -number
}