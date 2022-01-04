/* const express = require("express");
const app = express();
const volleyball = require("volleyball");
const routes = require("./routes/index");
const bodyParser = require('body-parser')

app.use(volleyball());

app.use("/api", routes);

app.listen(3001, () => console.log("listening on port 3001")); */

const express = require("express");
const app = express();
const volleyball = require("volleyball");
const routes = require("./routes/index.js");

// middlewars
app.use(volleyball);
app.use(express.json());

app.use("/api", routes);

app.listen(3001, () => {
  console.log("listen on port 5432");
});
