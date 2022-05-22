var express = require("express");
var path = require("path");

var port = 3001;
var app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
