var mongoose= require("mongoose");

/* ********************************************
Schedular SCHEMA
******************************************** */

var schedularSchema = mongoose.Schema({
    type:{type: String, enum : ['recurring', 'single']},
    startDate: {type: 'Date'},
    endDate: {type: 'Date'},
    weekdays: {type: [String], enum : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
    startTime: {
        hh: String,
        mm: String,
        A: String
    },
    startA: {type: 'String'},
    endTime: {
        hh: String,
        mm: String,
        A: String
    },
    endA: {type: 'String'},
    excludedDates: [String]
}, {
    timestamps: true
});


// Build the schedular model and export it
module.exports = mongoose.model('Schedular', schedularSchema);

