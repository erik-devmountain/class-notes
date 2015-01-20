### Angular

- allows us to extend HTML
- lets us define our own structure 

- directive: define your own html
  - built in directive: <html ng-app> //kicks off the whole app, doesn't have to be html but it usually is
  - ng-model="name" //makes an empty view model and fills with name property
    - {{name}} //data binding expression 
  - ng-init //not used
  - ng-repeat
    // ng-repeat="name in names"

- filters: 
  // {{ cust.name | uppercase }}

- $scope is the glue between view and controller
  - is just an object, available inside the view 

- everything in controller should be what you want to display in view. not meant to have code interfacing with the backend 

- $scope is created when you make a controller 


- Module 
  - config -> routes
  // var demoApp = angular.module('demoApp', []);
  //empty array is for dependency injection (module that demoApp relies on) 



- routes: can point to view and controller 

- views: have directives, filters, etc

- data should be fetched with factory 














