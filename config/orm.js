
// Dependencies
// =============================================================
var connection = require("../config/connection.js");

var orm = {
  all: function (tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function (err, 
      result) { 
        if (err) throw err;
        cb(result)
        console.log("this is the orm all ")
     })
    },

  update: function (tableInput, condition, cb) {
    console.log("UPDATE condigion is " + condition + " taleInput is " + tableInput)
    connection.query("UPDATE " + tableInput + ' SET devoured=true WHERE id='+condition+';',
     function (err, result) {
      if (err) throw err;
      cb(result);
      console.log("this is the UPDATED Func");
      })
    },

    create: function (tableInput, val, cb) { 
      connection.query('INSERT INTO '+ tableInput + "(burger_name) VALUES ('"+val+"') ; ", function (err, result) {
          if (err) throw err;
          cb(result);
      })
     }
}

module.exports = orm;
