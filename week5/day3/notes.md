//Async paradigm

function() {
  //do some stuff
  getData(cb);
}

function cb(res){
  //process res.data
}


//Synchronous paradigm

function(){
  //do some stuff
  var data = getData();
  //process data
}

HTTP 

- two pieces 
  - request and response 

-contents
  - header
    - method
      - GET, POST, DELETE, PUT, HEAD, OPTIONS, PATCH
    -status code
    -content type 
  - body
  - cookies 




