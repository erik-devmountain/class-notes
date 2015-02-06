

var onRequest = function(req, res){
  res.writeHead(245, {
    'Connection': 'close',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' //allows server to access different domain
  });
  res.end(JSON.stringify({message: 'Holo world'}));
}

var smurfs = require('./smurfs'); //asking for a file thats on disk
smurfs();

var http = require('http');
http.createServer(onRequest).listen(12200);
console.log('listening on port 12200');


