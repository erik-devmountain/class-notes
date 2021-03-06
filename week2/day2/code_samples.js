//avoid directly comparing objects 

var obj1 = { number: 2, name: "Erik"}

var obj2 = { number: 2, name: "Erik"}

///////////

var sayName = function(name) {
  alert("Hello" + name);
}


var myOtherFn = function(callback) {
  console.log(callback);
  debugger;
}


///////////

var sayName2 = function() {
  alert("Hello");
}


var myOtherFn = function(callback) {
  console.log('the param is ' + callback);
  console.log('before invoking the callback');
  callback();
  console.log('after invoking the callback');
}

///////////////

var sayName = function(name) {
  alert("Hello " + name);
}

//getName passes the value from getname to sayname 

var getName = function(callback) {
  var name = prompt("what's your name?");
  callback(name);
}

////////////////

var addNums = function(num_1, num_2) {
  return num_1 + num_2;
}

var invoker = function(callback) {
  return callback(4, 5);
}

///////

var fruits = ["apple", "pear", "orange"];

var getFirst = function(arr, callback) {
  var first = arr[0];
  //we can do something here
  callback(first);
}

var firstItem = function(first) {
  alert("the first item is " + first);
}

//callbacks: function is passed to another function and
//called at a later point in time

//will call fn after 3 seconds
setTimeout(function(){
  alert("here")
}, 3000)

//delay alerting of songs until you have data

var getSongs = function(callback) {
  alert('about to get songs');
  setTimeout(function() {
    var songData ="Nellys Songs";
    alert("after 3 seconds");
    callback(songData);
  }, 3000);
}

var alertSongs = function(songs) {
  alert('the songs are ' + songData);
}

////////

var cities = ["Paris", "London", "New York"];

var last = function(arr, callback) {
  var lastItem = arr[arr.length -1];
  callback(lastItem);
}

var alertLast = function(toAlert) {
  alert("the last item is " + toAlert);
}




/////// Part 2 //////////

var person = function(name, age) {
  var obj = {};
    obj.name = name;
    obj.age = age,
    obj.sayName = function() {
      alert(this.name);
    }
  };
};


// constructor
// function that returns an object


var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

//prototype is an object that every function has
//array.push is an example
//like a backpack that the constructor has and is able
//to lend to its children

Person.prototype.sayName = function() {
  alert(this.name);
}

var sven = new Person("sven", 50);

Person.prototype.gender = "male";

//can add protoype to Array

var fruit = ["apple", "banana", "orange"];

Array.prototype.first = function() {
  return this[0];
}


//car constructor that has properties: color, make, model
//drive function (alert driving) 
//stop function (alert stopping)

var Car = function(color, make, model) {
  this.color = color;
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function() {
  alert("Driving");
}

Car.prototype.stop = function() {
  alert("Stopping");
}

var fiesta = new Car("red", "ford", "fiesta");
var tesla = new Car("blue", "tesla", "model S");

//////

var Boat = function(color, price) {
  //var this = Object.create(Boat.prototype)
  this.color = color;
  this.price = price;
}

Boat.prototype.drive = function() {
  console.log("Driving");
}

Boat.prototype.stop = function() {
  console.log("Stopping");
}

Boat.prototype.float = function() {
  console.log("floating")
}

var catamaran = new Boat('blue', 4000);
var speedboat = new Boat('red', 60000);

//keyword 'this' refers to whatever is to the left of the dot at call time 































