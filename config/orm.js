var connection = require("./connection.js");

var orm = {
    //collects ALL the data from the database
    all: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    update: function(tableInput, id, cb) {
        var query = "UPDATE " + tableInput + " SET devoured = true WHERE id = " + id + ";";
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    create: function(tableInput, val, cb) {
        var query = "INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');";
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}


module.exports = orm;

