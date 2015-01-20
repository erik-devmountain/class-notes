var app = angular.module('myFriendsList'); //not giving empty array, this gets the module that was already created

app.controller('mainController', function($scope) {
  $scope.friends = ['john', 'mike', 'patrick'];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";
    
  } 
});












