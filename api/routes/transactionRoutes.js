'use strict';
module.exports = function(app) {
  var transactionList = require('../controllers/transactionController');

  // transactionList Routes
  app.route('/transactions')
    .get(transactionList.list_all_transactions)
    .post(transactionList.create_a_transaction);


  app.route('/transactions/:transactionId')
    .get(transactionList.read_a_transaction)
    .put(transactionList.update_a_transaction)
    .delete(transactionList.delete_a_transaction);
};
