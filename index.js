const express = require("express");
const bodyParser = require("body-parser");

//create express app
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

//define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Wellcome to User app" });
});

mongoose.Promise = global.Promise;

// Connecting to the database


require('./app/routes/user.route.js')(app);

// listen for requests
app.listen(4000, () =>{
    mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
});
