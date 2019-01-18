var mongoose= require("mongoose");

/* ********************************************
Schedular SCHEMA
******************************************** */

var schedularSchema = mongoose.Schema({
    type:{type: String, enum : ['recurring', 'single']},
    select_date: {type: 'Date'},
    startDate: {type: 'Date'},
    endDate: {type: 'Date'},
    startTime: {type: 'Date', required: true},
    endTime: {type: 'Date', required: true},
    weekdays: {type: 'String', enum : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
    excludedDates: [String]
}, {
    timestamps: true
});


// Build the schedular model and export it
module.exports = mongoose.model('Schedular', schedularSchema);

