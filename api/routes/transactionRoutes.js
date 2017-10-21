'use strict';
module.exports = function (app) {
    var transactionList = require('../controllers/transactionController');

    // transactionList Routes
    app.route('/transactions')
        .get(transactionList.listAllTransactions)
        .post(transactionList.createOneTransaction);


    app.route('/transactions/:transactionId')
        .get(transactionList.readOneTransaction)
        .put(transactionList.updateOneTransaction)
        .delete(transactionList.deleteOneTransaction);
};
