//create a function that can only be invoked once 

// function(){
//   console.log('this will run once');
// }
var once = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            console.log('this will run once');
        }
    };
})();