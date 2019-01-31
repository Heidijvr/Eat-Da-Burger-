// Import (require) connection.js
var connection = require("../config/connection.js");



var orm = {
    //collects ALL the data from the database
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
           
            if (err) throw err;
            cb(result)   
        });
    },

    
    // update: function(tableInput, id, cb) {
    //     connection.query("UPDATE " + tableInput + " SET devoured = true WHERE id = " + id + ";",
    //     function(err, result) {
    //     if (err) throw err;
    //     cb(result);
    //     })       
    // },

     
    update: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured = true WHERE id = " + condition + ";",
        function(err, result) {
        if (err) throw err;
        cb(result);
        })       
    },


    create: function(tableInput, val, cb) {
            connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');",
            function(err, result) {
                if (err) throw err;
                cb(result);
            });
        }
    }

        // // Set burger devoured status to true.
        // updateOne: function(table, objColVals, condition, cb) {
        //     var queryString = "UPDATE " + table;
        //     queryString += " SET ";
        //     queryString += objToSql(objColVals);
        //     queryString += " WHERE ";
        //     queryString += condition;
    
        //     console.log(queryString);
    
        //     connection.query(queryString, function(err, result) {
        //         if (err) {
        //             throw err
        //         }
        //         cb(result);
        //     });
        // },


    // Set burger devoured status to true
   

//  /      // Delete a burger from the db.
//     deleteOne: function(table, condition, cb) {
//         var queryString = "DELETE FROM " + table;
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);

//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err
//             }
//             cb(result);
//         });
//     }
// };






module.exports = orm;

