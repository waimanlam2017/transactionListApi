'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var transactionSchema = new schema({
    category: {
        type: String,
        required: 'Kindly enter the category of the transaction'
    },
    amount: {
        type: Number,
        default: 0
    },
    Detail: {
        type: String
    },
    transactionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transactions', transactionSchema);
