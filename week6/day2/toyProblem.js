//create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];

var soccer = function(arr){
  soccerTeam = {
    "49ers": [],
    "Cowboys": [],
    "Bears": [],
    "Raiders": []
  };
  for (var i = 0; i < arr.length; i++) {
    // if (!soccerTeam[arr[i].team]){
      soccerTeam[arr[i].team].push({'name': arr[i].name, 'team': arr[i].team})
    //}
  }
  return soccerTeam;
}

soccer(arr);