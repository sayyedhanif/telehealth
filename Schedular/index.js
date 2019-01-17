var express = require('express')
var app = express()
var bodyParser = require('body-parser');
    
var schedularList = require('./mock-data/getSchedular');

// connect to middleware
app.use(bodyParser.json());

// api routes
app.post('/schedular', function(req, res) {
    console.log("schedular server----->Schedualr post api request!-------------"); 
    console.log("req.body",req.body)
    console.log("request.headers.host",req.headers.host)
    
});

app.get('/schedular', function(req, res) {
    console.log("schedular server----->Schedualr get api request!-------------")
    console.log("req.body",req.body)
    console.log("request.headers.host",req.headers.host)
    res.json(schedularList)
});


process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(3001, function () {
  console.log('Schedular app server listening on port 3001!')
})


//application/x-www-form-urlencoded