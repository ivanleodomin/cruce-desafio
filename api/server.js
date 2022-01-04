const mongoose = require("./database/connection");
const express = require("express");
const app = express();
const routes = require("./routes/index.js");
const volleyball = require("volleyball");

// middlewars
app.use(volleyball);
app.use(express.json());

//routes
app.use("/api", routes);

//connect db
mongoose.connection.on("open", () => {
  app.listen(3001, () => {
    console.log("listen on port 3001");
  });
}); 
