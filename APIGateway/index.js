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
       console.log("err",err,"response",response.statusCode,"body",body)
        if(err){
            res(500, {error: err});
        }
        else{
            res(201, {message: 'Created!'});
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
       console.log("err",err,"response",response.statusCode,"body",body)
        if(err){
            res(500, {error: err});
        }
        else{
            res.json(body)
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
})


//application/x-www-form-urlencoded