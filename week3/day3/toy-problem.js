var text = "a++====g++adsssd++y+++";

var simpleSymbols = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (/([A-Za-z])/g.test(str.charAt(i))) {
      if (str.charAt(i - 1) === '+' && str.charAt(i + 1) === '+') {
        return true;
      };
    };
  };
  return false;
};  

simpleSymbols(text);


