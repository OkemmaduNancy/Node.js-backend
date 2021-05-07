const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//parse application/json
app.use(bodyParser.json())

//define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to nodejs backend" });
});

//listen for requests
app.listen(4000)