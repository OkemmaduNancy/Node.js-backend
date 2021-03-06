const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./app/routes')
const cors = require('cors')

//create express app
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
app.use(cors())
//define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Wellcome to User app" });
});

// Connecting to the database
mongoose.Promise = global.Promise;

app.use('/v1', routes)
// 3!%DSsDiTD3xXAu
// admin
const port = process.env.PORT || 4000

// listen for requests
app.listen(port, () => {
  mongoose
    .connect(dbConfig.prodUrl, {
      useNewUrlParser: true,
      auth: {
        user: "admin",
        password: "3!%DSsDiTD3xXAu"
      }
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
});
