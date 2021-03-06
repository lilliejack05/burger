// ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.All('burgers', function(res) {
      cb(res);
    });
  },

  // variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_Controller.js).
module.exports = burger;