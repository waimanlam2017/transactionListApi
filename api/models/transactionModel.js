'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    Category: {
        type: String,
        required: 'Kindly enter the category of the transaction'
    },
    Amount:{
        type: Integer,
        default: 0
    },
    Unit:{
        type: [{
            type: String,
            enum: ['HKD', 'USD', 'EUR', 'JPY', 'TWD', 'GBP']
        }],
        default: ['HKD']
    },
    Date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
