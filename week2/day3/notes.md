
###Higher order functions

- Higher order functions: its input is other functions, output is other functions
- functions are first class members of the language(can be passed around like a variable) 

###Variable hoisting

- behind the scenes it rearranges your code, moves variable declarations to the top

### Function declaration hoisting

- function expression moved to the top

### how Javascript uses OOP

- does not use 'class' keyword 
- every object has a prototype. it is a delegation tool. prototype is also an object
- does not work with inheritance
- dont store per isntance data in prototype

### this 

- three possible values
  - left of the dot at runtime
  - if class has been instantiated using 'new'. 'this' is bound to the newly created object
  - if a function is being called with .call() or .apply() 'this' is bound to whatever context is passed in 

### maker and constructor

- maker: factory
- Object.create 

### closures

- allows you to refer to variables that were defined outside of the current function 
- closures allow us to have private data. guarantees that no one can direcly access data 
-module pattern: create new instance with closure 

function buttonClickHandler() {
  checkCredentials(username, password, function(isCorrect) {
  if(isCorrect) {
    alert('Welcome, ', username);
    notifyAuthorities(function(authorities) {
      alert("authoritah");
      //closure
    })
  }
  })
}

function loginFinished(isCorrect)

### scope 

- types
  - function
  - local
  - global
- lecical scope: dicated by how your wrote the code 
































