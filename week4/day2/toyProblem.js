var fibcheck = function(num){
  var fib = [0, 1];
  for (var i = 2; i < 100; i++) {
      fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
      // console.log(fib);
  }
  if (fib.indexOf(num) != -1){
    return 'yes';
  }
  return 'no';
}

fibcheck(23847);
