// required dependencies
var express = require('express');
var router = express.Router();

// model (burger.js) to use its database functions.
var burger = require('../models/burger');

// create the routes 
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res) {
  console.log("insertburger")
  burger.insertOne([ 
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  console.log("req",req.params.id)
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// export routes for server.js to use.
module.exports = router;