factorial = function (num) {
    if (num === 1 || num === 0) {
      return num;
    }
  
    for (var i = num; i >= 1; i--) {
      num *= i;
    }
    return num;
  };
  
  console.log(factorial(10));
  