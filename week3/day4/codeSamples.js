setTimeout(function) {
  var number = Math.random();
    if (number > .5) {
    deferred.resolve({text: 'success'});
    } else {
    deferred.reject({error:'error'});
    }
    }, 1000);
    return deferred.promise;


$http({
  method: 'GET',
  url: 'http://google.com'
 }).success(function(data) {
    var result = data.result;
    deferred.resolve(result);
 }).error 
})