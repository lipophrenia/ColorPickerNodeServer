const host = "localhost";
const port = 8000;
const express = require("express");
const app = express();

htmlindex = __dirname + "/www/index.html";
htmlcolorpick = __dirname + "/www/colorpick.html";
htmltimer = __dirname + "/www/timer.html";

app.get("/", function (req, res) {
  res.sendFile(htmlindex);
});

app.get("/colorpick", function (req, res) {
  res.sendFile(htmlcolorpick);
});

app.get("/timer", function (req, res) {
  res.sendFile(htmltimer);
});

app.listen(port, () => {
  console.log(`\nServer is running on http://${host}:${port}/`);
});