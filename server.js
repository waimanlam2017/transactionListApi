var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Transaction = require('./api/models/transactionModel'), //created model loading here
    bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/transactionDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res) {
    res.send({ url: res.statusCode  })
});


var routes = require('./api/routes/transactionRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Transaction List RESTful API server started on: ' + port);
