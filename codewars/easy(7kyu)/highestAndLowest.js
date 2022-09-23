function highAndLow(numbers){
    // ...
    let nums = numbers.split(' ');
    let sorted = nums.sort(function (a, b) {
      return Number(b) - Number(a);
    });
    return sorted[0] + " " + sorted[sorted.length - 1];
  
  }

//   numbers = numbers.split(" ");
//   return Math.max(...numbers) +" "+ Math.min(...numbers);