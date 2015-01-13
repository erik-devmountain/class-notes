[
  {
    haveOrdered: true,
    size: 6,
    people: 4,
  },
    {
    haveOrdered: false,
    size: 5,
    people: 4,
  },
    {
    haveOrdered: true,
    size: 2,
    people: 4,
  },
    {
    haveOrdered: true,
    size: 6,
    people: 4,
  },
]




//[] [] [] [Office]

//which slot was occupied
//yearly revenue
//how many visitors

// Collection
//   List
//   Collection

var carWash = {
  slots: [true, false, true],
  info: {
    visitors: 32,
    revenue: 24567,
  }
}


//array of objects
var countryGrammer = [
  {
    title: 'St. Louis',
    length: 23409,
    bitrate: 2839048,
  },
    {
    title: 'Haystack',
    length: 23409,
    bitrate: 2839048,
  }
]

//keys/properties are first
var erik = {
  name: "erik",
  age: 28,
  birthday: 1986,
  taken: false
}

erik.hairColor = "brown";

//add method to object

erik.getHairColor = function() {
  return "brown";
}

//make one request to get all tables

var tables = [
 {
    occupied: false,
    numPeople: 0,
    hasOrdered: false,
    id: 1
  },
  {
    occupied: true,
    numPeople: 3,
    hasOrdered: false,
    id: 2
  },
  {
    occupied: true,
    numPeople: 4,
    hasOrdered: true,
    id: 3
  }
]

//see how many people are in the restuarant 
var getTotal = function() {
  var totalPeople = 0;
  for (var i = 0; i < tables.length; i++) {
    totalPeople += tables[i].numPeople;
  }
  return totalPeople;
};

// for in loop

var person = {
  name: "erik",
  age: 24
};

for (var key in person) {
  console.log(person[key]);
}

//bracket notation 

person["age"];







