// Require dependencies needed: express for api, filesystem, utility module
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();

// Make port constant for local host
const PORT = process.env.PORT || 3006;


// Setup data parsing using express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup port listener and console log
app.listen(PORT, function() {
    console.log("notesApp listening on PORT: " + PORT);
});  