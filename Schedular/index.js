var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var config = require("config");
var morgan = require('morgan');
const helmet = require('helmet')

var schedularList = require('./mock-data/getSchedular');
var schedualrController = require('./controllers/schedualr');
var tokboxController = require('./controllers/tokbox');

// connnect mongoDB database
try {
  mongoose.connect(config.MongoDB.uri);  
} catch (error) {
  console.log("Issue while connecting mongodb!");
  process.exit();
}
console.log("mongodb connected!");

// connect to middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('tiny'));

//for core access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api routes
// for scheduling
app.post('/schedular', schedualrController.create);
app.get('/schedular', schedualrController.index);

// for genearating call api
// For this api need schedular id
app.post('/telehealth/schedular/:id/call', tokboxController.initiateSession); 
app.get('/telehealth/schedular/:id/call/', tokboxController.getSession);

process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(config.server.port, function () {
  console.log('Schedular app server listening on port ', config.server.port)
});