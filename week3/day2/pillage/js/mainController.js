var app = angular.module('pillage');

app.controller("loot", function($scope){
  
  $scope.vikings = [
    {
      name: "Thor",
      occupation: "logistics"
    },
    {
      name: "Sven",
      occupation: "supply chain"
    },
    {
      name: "Olaf",
      occupation: "armor"
    },
    {
      name: "Oleg",
      occupation: "munitions"
    }
  ];

  $scope.options = [
    {value: "name", label: "Name"},
    {value: "occupation", label: "Occupation"}
  ];

});