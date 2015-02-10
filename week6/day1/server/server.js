var express = require('express');
var bodyParser = require('body-parser');
var request = require('request'); //so we can make API requests

var app = express();

//middleware that preprocesses request
app.use(express.static(__dirname+'/public'))  //looks at every dir and subdir for static files
app.use(bodyParser.json());

app.post('/api/send_text_message', function(req, res){
  request.post('https://ACfcdfe0c7200797bbbf956f456ebe223c:ba67926e1e4aa1dbfc136fb32f79abde@api.twilio.com/2010-04-01/Accounts/ACfcdfe0c7200797bbbf956f456ebe223c/Messages.json', {
    form: {
      To: '7327579649',
      From: '+17323911035',
      Body: req.body.message
    }
  }, function(err, response, body){
    if(err){
      console.log('error sending message');
      return res.status(500).end();
    }
    console.log('successfully sent message');
    return res.status(200).end();
  })
})  
  // console.log(req.body.message);

app.get('/api/current_weather', function(req, res){
  return res.json({current_weather: 'partly cloudy'})
})

app.listen(8080);

