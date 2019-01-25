var mongoose= require("mongoose");

/* ********************************************
OpenTokBox SCHEMA
******************************************** */

var tokBoxSchema = mongoose.Schema({
    schedularId: {type: 'String'},
    sessionId: {type: 'String'},
    token: {type: 'String'}
}, {
    timestamps: true
});


// Build the schedular model and export it
module.exports = mongoose.model('TokBox', tokBoxSchema);

