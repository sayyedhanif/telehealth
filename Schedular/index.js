var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var json = [
    {
      type: 'recurring',
      startDate: 1530383400000,
      endDate: 1543602600000,
      weekdays: ['Monday', 'Wednesday'],
      startTime: 1530419400000,
      endTime: 1530430200000,
      excludedDates: ['09/01/2018'],
    },
    {
      type: 'single',
      select_date: 1535275800000,
      startTime: 1535275800000,
      endTime: 1535286600000,
      weekday: 'Monday',
    },
    {
      type: 'recurring',
      startDate: 1530383400000,
      endDate: 1543602600000,
      weekdays: ['Monday', 'Wednesday'],
      startTime: 1530419400000,
      endTime: 1530430200000,
      excludedDates: ['09/01/2018'],
    },
    {
      type: 'single',
      select_date: 1535275800000,
      startTime: 1535275800000,
      endTime: 1535286600000,
      weekday: 'Monday',
    },
    {
      type: 'single',
      select_date: 1535275800000,
      startTime: 1535275800000,
      endTime: 1535286600000,
      weekday: 'Monday',
    }
    
    ]
    

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
    res.json(json)
});


process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})


//application/x-www-form-urlencoded