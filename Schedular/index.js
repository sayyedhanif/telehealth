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
  console.log("mongodb connected!")
} catch (error) {
  console.log("Issue while connecting mongodb!")
  process.exit();
}


// connect to middleware
app.use(bodyParser.json());

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