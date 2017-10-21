'use strict';

var mongoose = require('mongoose'),
    transaction = mongoose.model('transactions');

exports.listAllTransactions = function (req, res) {
    transaction.find({}, function (error, transaction) {
        if (error) {
            res.send(error);
        }
        res.json(transaction);
    });
};

exports.createOneTransaction = function (req, res) {
    var newTransaction = new transaction(req.body);
    newTransaction.save(function (error, transaction) {
        if (error) {
            res.send('Error creating a new transaction!');
        }
        res.json(transaction);
    });
};

exports.readOneTransaction = function (req, res) {
    transaction.findById(req.params.transactionId, function (error, transaction) {
        if (error) {
            res.send(error);
        }
        res.json(transaction);
    });
};

exports.updateOneTransaction = function (req, res) {
    transaction.findOneAndUpdate({ _id: req.params.transactionId }, req.body, { new: true }, function (error, transaction) {
        if (error) {
            res.send(err);
        }
        res.json(transaction);
    });
};

exports.deleteOneTransaction = function (req, res) {
    transaction.remove({ _id: req.params.transactionId }, function (error, transaction) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Transaction successfully deleted' });
    });
};