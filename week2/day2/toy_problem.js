var fruits = ["apple", "banana", "orange"];
var vegetables = ["squash", "pepper", "carrot"];
var mutant = [];
var combinator = function(arr1, arr2) {
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    mutant.push(arr1[i] + " " + arr2[i]);
  } 
  return mutant
}