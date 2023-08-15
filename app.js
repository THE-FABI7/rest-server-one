const express = require("express");
const config = require("config");

const port = config.get("server-port");

const app = express();

app.listen(port, () => {
  console.log("listening on port " + port);
});
