//sorting example 

var arr = [];

for (var i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 100))
}

var sortNum = function(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
}

sortNum(arr);

arr;