const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const express = app();

app.get("/", function (req, res) {
  res.send(__dirname + "/signup.html");
});

app.listen(app, function () {
  console.log("server is running on port 3000");
});
