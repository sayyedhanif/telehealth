var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var config = require("config");

var schedularList = require('./mock-data/getSchedular');
var schedualrController = require('./controllers/schedualr');

// connnect mongoDB database
try {
  mongoose.connect(config.MongoDB.uri);  
} catch (error) {
  console.log("Issue while connecting mongodb!");
  process.exit();
}
console.log("mongodb connected!");

// connect to middleware
app.use(bodyParser.json());

//for core access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api routes
app.post('/schedular', schedualrController.create);

app.get('/schedular', schedualrController.index);


process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(3001, function () {
  console.log('Schedular app server listening on port 3001!')
});