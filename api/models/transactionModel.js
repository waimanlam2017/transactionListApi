'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    Category: {
        type: String,
        required: 'Kindly enter the category of the transaction'
    },
    Amount:{
        type: Number,
        default: 0
    },
    Unit:{
        type: String,        
        default: 'HKD'
    },
    TransactionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transactions', TransactionSchema);
