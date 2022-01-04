const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/cruce";

mongoose.connect(uri)
.then(() => console.log("Connect db"))
.catch((error) => console.log(error))


module.exports = mongoose;
