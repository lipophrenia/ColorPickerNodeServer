const host = "localhost";
const port = 8000;
const express = require("express");
const app = express();

htmlpage = __dirname + "/www/index.html";

app.get("/", function (req, res) {
  res.sendFile(htmlpage);
});

app.listen(port, () => {
  console.log(`\nServer is running on http://${host}:${port}/`);
});