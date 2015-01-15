//inner function can still access outer function var

var outerFunction = function() {
  var outerFnVariable = "This is the var in the outerfunction variable";
  return function() {
    alert(outerFnVariable);
  };
};

///////

var makeCounter = function() {
  var counter = 0;
  return function() {
    counter++;
    console.log(counter);
  }
}


var innerFn = makeCounter();

////////

var makeCounter_2 = function(count) {
  var counter = count;
  return function() {
    counter++;
    console.log(counter);
  }
}


var innerFn = makeCounter_2(23);

///////

var makeCounter_3 = function(arg) {
  return function() {
    arg++;
    console.log(arg);
  }
}

var innerFn = makeCounter_3(23);

//////////

var multiplier = function(num) {
  return function(num2) {
    return num * num2;
  };
};

var twice = multiplier(4);
twice(5); //10
















