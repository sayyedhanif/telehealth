var Schedular = require('../model/schedular')

exports.create = function(req, res){

    console.log("schedular server----->Schedualr post api request!-------------"); 
    console.log("req.body",req.body)
    console.log("request.headers.host",req.headers.host);


    var schedular = new Schedular(req.body);

    schedular.save(function(err,schedular){
        if(err){
            if(err.code===11000){
                //res.redirect( '/user/new?exists=true' );
                res.json(500, {error: 'schedular already exist with this name!'});
            } else{             
                res.json(500, {error: 'error in creating schedular!'});
            }
        } else{
        //res.redirect('/users/index');
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
    console.log("schedular server----->Schedualr get api request!-------------")
    console.log("req.body",req.body)
    console.log("request.headers.host",req.headers.host)

    Schedular.find({},function(err,schedulars){
        if (!err){
            res.json(schedulars);
        }
    });
};