const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the serving static files in the express in a directory named public
app.use(express.static("public"));

// Use bodyParser for URL encoding
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("login")
});

app.get("/home", function (req, res) {
    res.render("home",)
});

app.get("/home2", function (req, res) {
    res.render("home2",)
});

app.get("/home3", function (req, res) {
    res.render("home3",)
});

app.get("/addtocart", function (req, res) {
    res.render("addtocart",)
});

app.get("/cart", function(req, res){
    res.render("cart")
})

// Set the server port to 3000
app.listen(3000, function () {
    console.log("Server started on port 3000");
});