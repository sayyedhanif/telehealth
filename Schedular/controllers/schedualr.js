var _ = require('lodash')

var Schedular = require('../model/schedular')

exports.create = function(req, res){

    console.log("Schedular server----->schedulars post api request!-------------"); 
    console.log("req.body",req.body)


    var schedular = new Schedular(req.body);

    schedular.save(function(err,schedular){
        if(err){
            if(err.code===11000){
                res.json(500, {error: 'schedular already exist with this name!'});
            } else{             
                res.json(500, {error: 'error in creating schedular!'});
            }
        } else{
        var parsedData = schedular.toJSON();

        if (parsedData.type === 'single') {
            parsedData.select_date = new Date(parsedData.select_date).getTime();
        } else {
            parsedData.startDate = new Date(parsedData.startDate).getTime();
            parsedData.endDate = new Date(parsedData.endDate).getTime();
        }
        parsedData.startTime = new Date(parsedData.startTime).getTime();
        parsedData.endTime = new Date(parsedData.endTime).getTime();
        res.json(parsedData);
    }
  });
};

exports.index= function(req,res){
    console.log("Schedular server----->schedulars get api request!-------------")
    console.log("req.body",req.body)

    Schedular.find().lean().exec(function(err,schedulars) {
        if(err){          
            return res.json(500, {error: err});
        } else if (schedulars && _.isEmpty(schedulars)){
            return res.json(500, {error: 'Internal server error!'});
        } else {
            _.each(schedulars, (schedular)  => {
                if (schedular.type === 'single') {
                    schedular.select_date = new Date(schedular.select_date).getTime();
                } else {
                    schedular.startDate = new Date(schedular.startDate).getTime();
                    schedular.endDate = new Date(schedular.endDate).getTime();
                }
                schedular.startTime = new Date(schedular.startTime).getTime();
                schedular.endTime = new Date(schedular.endTime).getTime();
            });
            res.json(schedulars);
        }
    });
};