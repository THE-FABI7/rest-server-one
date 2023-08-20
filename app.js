const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const port = config.get("server-port");

/** creation of JSON parser  */
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
  extended: true,
});

const app = express();

app.use(jsonParser);
app.use(urlEncodedParser);

const controller = require('./controller/logic/dispositivos.controller')

app.get("/", (req, res) => {
  res.send("api rest of cell phones and operating systems");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
