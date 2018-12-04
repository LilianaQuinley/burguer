
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
// Routes
// =============================================================
// module.exports = function(app) {
//   // Get all 
//   app.get("/api/selectAll", function(req, res) {
//     var dbQuery = "SELECT * FROM burgers";

//     connection.query(dbQuery, function(err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//   });

//   // Add 
//   app.post("/api/insertOne", function(req, res) {
//     console.log("insert burger Data:");
//     console.log(req.body);

//     var dbQuery = "INSERT INTO burgers (burger_name) VALUES (?)";

//     connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
//       if (err) throw err;
//       console.log("burger Successfully Saved!");
//       res.end();
//     });
//   });

// // Updated
// app.post("/api/updated", function(req, res) {
//     console.log("updated burger Data:");
//     console.log(req.body);

//     var dbQuery = "UPDATED burgers SET burger WHERE burger_name VALUES (?)";
 

//     connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
//         if (err) throw err;
//         console.log("burger Successfully updated!");
//         res.end();
//     });
//     });
//};