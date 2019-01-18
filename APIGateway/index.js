var express = require('express');
var request = require('request');
var app = express()
var bodyParser = require('body-parser');

// connect to middleware
app.use(bodyParser.json());

// api routes
app.post('/api/v1/schedular', function(req, res) {
    console.log("APIGateway server----->Schedualr post api request!-------------"); 
    console.log("req.body",req.body)
    console.log("req.headers.host",req.headers.host)
    request({
        method : "POST",
        json : true,
        body : req.body,
        url : "http://localhost:3001/schedular",
        headers : {
            "Content-Type" : "application/json"
        }
    },function(err,response,body){
       console.log("err",err,"body",body)
        if(err){
            res.status(500).json({success: false, message: err});
        }
        else{
            res.status(201).json( {success: true, message: 'Created!', data: body});
        }
      })
    
});

app.get('/api/v1/schedular', function(req, res) {
    console.log("APIGateway server----->Schedualr get api request!-------------")
    console.log("req.body",req.body)
    console.log("req.headers.host",req.headers.host);
    request({
        method : "GET",
        json : true,
        url : "http://localhost:3001/schedular",
        headers : {
            "Content-Type" : "application/json"
        }
    },function(err,response,body){
       console.log("err",err,"body",body)
        if(err){
            res.status(500).json({success: false, message: err});
        }
        else{
            res.json({success: true, message: 'Fetched list of schedulars!', data: body})
        }
      })
});


process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(3000, function () {
  console.log('APIGateway app server listening on port 3000!')
});