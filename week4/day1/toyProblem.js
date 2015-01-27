var ABCheck = function(str) {
  for (var i = 0; i < str.length; i++) {
    console.log('in the for statment i is: ' + i)
    if (str.charAt(i) === 'a') {
      console.log('first if statment i is ' + i);
      if (str.charAt(i + 4) === 'b') {
        console.log('second if statment i is ' + i);
        return true;
      }
    }
  }
  return false;
};

ABCheck('lane borrowed');