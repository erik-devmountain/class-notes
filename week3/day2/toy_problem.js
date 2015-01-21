var pizza = function(num) {
  for (var i = (num - 1); i > 0; i--) {
    num *= i
    console.log('i is ' + i + ' and num is ' + num);
  };
  return num;
}


