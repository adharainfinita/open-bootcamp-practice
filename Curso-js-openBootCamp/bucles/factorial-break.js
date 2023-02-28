
  factorial = function (num) {
if (num === 1 || num === 0) {
    return num;
  }
    while (num > 1) {
      num *= (num - 1);
    }
    return num;
  };