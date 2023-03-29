const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");
// Set the serving static files in the express in a directory named public
app.use(express.static("public"));
// Use bodyParser for URL encoding
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to 1G Database
const db = mongoose.connection;
mongoose.connect("mongodb://0.0.0.0:27017/1G", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verify database connection
db.on("error", () => console.log("Error in connecting to database"));
db.once("open", () => console.log("Connected to 1G Database"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (request, response) => {
    try {
      //adding
      const email = request.body.email;
      const password = request.body.password;
      const usermail = db
        .collection("users")
        .findOne({ email: email }, (err, res) => {
          if (res == null) {
            // Show the message in a popup window
            return response.send(
              "<script>alert('Invalid account information! To gain access to the application, Please signup first.'); location.href='login'</script>"
              );
          } else if (err) throw err;
          if (res.password === password) {
            return response.send(
              "<script>alert('You have successfully logged in. Enjoy with your meals!'); location.href='home'</script>"
              );
          } else {
            // Show the message in a popup window
            return response.send(
              "<script>alert('The Email or password you entered is incorrect! Please try again.'); location.href='login';</script>"
              );
          }
        });
    } catch (error) {
      // Show the message in a popup window
      return response.send("<script>alert('Error! Please try again later.');</script>");
    }
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/signup-success", (req, res) => {
    res.render("signup-success");
});

app.post("/signup", async (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;

    const data = {
        "name": name,
        "email" : email,
        "password" : password
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return response.redirect("signup-success")
})

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/home2", (req, res) => {
  res.render("home2");
});

app.get("/home3", (req, res) => {
  res.render("home3");
});

app.get("/addtocart", (req, res) => {
  res.render("addtocart");
});

app.post("/cart", (req, res) => {
  res.render("cart");
});

// Set the server port to 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});