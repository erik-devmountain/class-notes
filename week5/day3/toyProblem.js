var multi = [1, 2, [3, [4], 5, 6], 7]

var merged = [].concat.apply([], multi);




[].concat.apply([], multi)


var flatten = function(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object'){
      console.log(arr[i], 'is object')
      for (var j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] === 'object'){
          console.log(arr[i][j], 'is object')
          for (var k = 0; k < arr[i][j].length; k++) {
            arr[i][j][k]
          };
        else if (typeof arr[i][j] !== 'object'){
          newArr.push(arr[i][j]);
        }
      };
    } else if (typeof arr[i] !== 'object')
    console.log(arr[i], 'is not an object')
    newArr.push(arr[i]);
  };
  return newArr;
}

flatten(multi);

var multi = [1, 2, [3, [4], 5, 6], 7]

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


