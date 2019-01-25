var Schedular = require('../model/schedular');
var TokBox = require('../model/tokbox');

var config = require('config');
var _ = require('lodash')
var OpenTok = require('opentok'),
opentok = new OpenTok(config.tokbox.apiKey, config.tokbox.apiSecret);

exports.initiateSession = function(req, res){

    console.log("schedular server----->tokbox post api request!-------------"); 
    console.log("req.body",req.params);
    if (req.params && !req.params.id) {
        return res.status(500).json({success:false, message: "Invalid schedule call initiated!"});
    }

    Schedular.findById(req.params.id, function(err, data){
        if( err) {
            return res.status(500).json({success:false, message: err});
        }
        if( !data) {
            return res.status(404).json({success:false, message: "Not found"});
        }
        opentok.createSession({mediaMode:"relayed"}, async function(error, session) {
            if (error) {
                console.log("Error creating session:", error)
                res.json(500, {error: 'error in creating session!'});
            } else {
                var token = session.generateToken()
                var obj =  {
                    token: token,
                    sessionId: session.sessionId,
                    schedularId: req.params.id
                };
                var openTokDoc = new TokBox(obj);

                openTokDoc.save(function(err,result){
                    if(err){            
                            res.json(500, {error: 'error in creating session!'});
                    } else{
                        obj.apiKey = config.tokbox.apiKey;
                        res.json(obj);
                    }
                });
            }
        });        
    });


    var schedular = new Schedular(req.body);
};

exports.getSession= function(req,res){
    console.log("schedular server----->tokbox get api request!-------------")
    console.log("req.body",req.body)
    if (req.params && !req.params.id) {
        return res.status(500).json({success:false, message: "Invalid schedule call initiated!"});
    }

    TokBox.findOne({schedularId:req.params.id}, function(err, result){
        if( err) {
            return res.status(500).json({success:false, message: err});
        }
        if( !data) {
            return res.status(404).json({success:false, message: "Not found any session data!"});
        }

        var obj = _.pick(result.toJSON(), ['schedularId','sessionId','token']);
        obj.apiKey = config.tokbox.apiKey;
        res.json(obj);
    });
};