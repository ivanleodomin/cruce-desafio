const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/cruce";
mongoose.connect(uri)
.catch((error) => console.log(error))

const db = mongoose.connection

db.on("open", () => {
  console.log('database "cruce" started');
});

module.exports = mongoose;
