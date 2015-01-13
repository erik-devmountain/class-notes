var fruit = ["apple", "banana", "pear", "orange"];

var finder = function(string, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === string) {
      return true
    }
  }
  return false;
}

var finder2 = function(string, arr) {
  if (arr.indexOf(string) !== -1) {
    return true;
  } else {
    return false;
  }
}