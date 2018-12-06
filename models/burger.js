//Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var orm = require("../config/orm.js");
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) { 
            cb(res)
        }) 
    },

    update: function (id,cb) {
        orm.update('burgers', id,cb);
    },

    create: function (name, cb) {
        orm.create("burgers", name, cb);
        
    }
}

// Export at the end of the burger.js file.
module.exports = burger;