// var firstNonRepeatedCharacter = function(str) {
//   var arrToCheck = str.split("");
//   var objHolder = {};
//   for (var i = 0; i < arrToCheck.length; i++) {
//     if (objHolder[arrToCheck[i]]) {
//       objHolder[arrToCheck[i]] = 'more than one';
//     } else {
//     objHolder[arrToCheck[i]] = "once";
//     }
//   };

//   console.log("arrToCheck: " + arrToCheck);
//   return objHolder;
// }

// var str = "ABACCDD";

// firstNonRepeatedCharacter(str);

// var nonRepeater = function(str) {
//   var index = [];
//   var count;
//   str.split('').forEach(function(letter, i) {
//     count = 0;
//     str.split('').forEach(function(latter) {
//       if (letter === latter) {
//         count += 1;
//       }
//     });
//     index.push(count);
//   });
// //   console.log(index.indexOf(1));
//   return str[index.indexOf(1)];
// };

// nonRepeater(str);

function firstNonRepeatedCharacter(string){
    debugger;
    var charCount = {};
    for(var i = 0; i < string.length; i++){
        if(charCount[string[i]]){
            charCount[string[i]] = 'More Than One';
        } else {
            charCount[string[i]] = 'One Time';
        }
    }    
    for(var j = 0; j < string.length; j++){
        if(charCount[string[j]] === 'One Time'){
          return string.charAt(j);      
        }
    }

    return 'Everything is repeated';
}

string = "everything is awesome";

firstNonRepeatedCharacter(string);