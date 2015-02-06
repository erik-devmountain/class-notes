var swapper = function(str, char1, char2){
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === char1){
      arr[i] = char2;
    }
  }
  var newStr = arr.join('');
  return newStr;
}

var sent = "some string";
swapper("some string", "s", "z");