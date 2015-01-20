var str = "The cow jumped over the moon";

var reverse = function(str) {
  var reversed = [];
  for (var i = (str.length - 1); i >= 0; i--) {
    reversed.push(str.charAt(i)); 
  }
  return reversed.join("");
}


