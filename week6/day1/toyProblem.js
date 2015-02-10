var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];
    
//given the above object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

var objkey = function(arr){
  var counter = {
    kingdom: 0,
    phylum: 0,
    class: 0
  };
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (var key in arr[i]){
      console.log(key, arr[i][key])
      if (counter.kingdom === 0){
        console.log('The key: ' + arr[i][key]);
      }
    }
  };
}

objkey(animals);



var count = function (arr) {

    var hash = {};
    
    for (var i = 0; i < arr.length; i++) {
        
        for (key in arr[i]) {
            
            if (!hash[arr[i][key]]) {
                hash[arr[i][key]] = 1;
            } else {
                hash[arr[i][key]]++
            }
        }
    
    }
   
    console.log(hash)
    return hash
}
        
   count(animals);
