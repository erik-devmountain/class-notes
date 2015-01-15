var replaceOdd = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

replaceOdd([1,2,3,4,5,6,7,8,9,10]);




