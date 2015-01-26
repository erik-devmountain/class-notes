- two prime directives of programming: 
  - modularity
  - dont duplicate

- angular reads from the html, starts up once it sees ng-app="appname≈"

- 4 components: 
  - controller_s
  - Services
  - Directives
  - Filters

## controller_

- mediates between services and view 


## services 

- not specified in HTML
- controller_s bring them into play through injection
- only time they come into play when a controller_ or another service asks for it
- no difference between the one you create and built in service 
- business logic


## directives

- allow us to take functionality and put into small piece
- group up view functionality 

## filters

- change the display of data and let you filter it 


-code smell: something smells funky, like high # of params

  - good practice to combine functions that collaborate into the same service 

  - comments are bad: failures to craft code correctly 


## Promises 

- I want the return value but it might not be available now 

spotifyGetData().then(success, fail)

function(res) {
  format()
  display()
  save()
}



var p = spotifyGetData()

p.then()

// p is one specific call 
// frozen at that moment in time 

p.then()
p.then()
p.then()


// they can't run simultaneously, will run in some kind of order 
//p.then will still work minutes later







