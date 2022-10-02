

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let res = 0
    for(let i=0 ; i<numbers.length;i++){
        res+=numbers[i]*numbers[i]
    }
  return res
}

function squareSum(numbers){
    if(numbers.length==0) return 0
    if(numbers.length==1 && (numbers[0]==0 || numbers[0]==1))  return numbers[0]
      let res = 0
      for(let i=0 ; i<numbers.length;i++){
          res+=numbers[i]*numbers[i]
      }
    return res
  }