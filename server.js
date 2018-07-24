var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var routes = require('./routes/api.js');

var PORT = process.env.PORT || 3001;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "article") {
    app.use(express.static("client/build"));
}

app.use(routes);
app.get("client", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/OMDb')

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
