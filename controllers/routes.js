// Dependencies
var express = require("express");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

// Import the model to use its db functions for burger.js
var burger = require("../models/burgers.js")

// Create routes

router.get('/', function (req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        res.render("index", {burger_data});
    });   
});



router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});


router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    });
});

module.exports = router;

// Set burger devoured status to true.
// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
//         if (result.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404.
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


// // Delete burger from db.
// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.deleteOne(condition, function(result) {
//         if (result.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404.
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


