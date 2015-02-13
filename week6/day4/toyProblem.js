var getCounter = function(){
  var counter = 0;
  return function(){
    counter+= 2;
    return counter
  }
}

var counter = getCounter();

counter();


