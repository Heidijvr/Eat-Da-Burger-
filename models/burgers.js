//models folder requires orm and it contains all the methods that is going to be used in order to modify our orm to use with the burger database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        //calling orm.all; burgers inserted as table input; function of response running as callback which will be sent into routes.js file
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

 

    update: function(id, cb) {
        orm.update("burgers", id, cb);  
    
    },

 

    create: function(name, cb) {
        orm.create("burgers", name, cb);
    },

//   // Delete a burger from the db.
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//         cb(res);
//         });
//     }
};

module.exports = burger;