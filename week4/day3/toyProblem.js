var arr = [2, 2, 2, 2, 2, 3, 5, 6, 7, 45, 12, 42, 65, 6, 2, 2, 2, 2];

var evenFinder = function(arr) {
  var countObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
       console.log('countObj does have key of ' + arr[i] + ' and will increment');
      countObj[arr[i]]++
    }
    else {
      console.log('countObj does not have key of ' + arr[i] + ' and will add to object');
      countObj[arr[i]] = 1;
    }
  };
  console.log(countObj);
  for (var key in countObj){
    console.log('key: ' + key + ' ' + 'countObj[key]: ' + countObj[key])
    if ((countObj[key] % 2) === 0){
      return key;
    }
  }
  return false
}

evenFinder(arr);