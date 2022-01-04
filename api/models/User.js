const { Schemas, model } = require("mongoose");

const userSchema = new Schemas({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  appKey: {
    type: String,
    unique: true,
    required: true,
  },
  appToken: {
    type: String,
    unique: true,
    required: true,
  },
  metodoDeFacturacion: { type: String },
  isActive: { type: Boolean },
});

module.exports = model("User", userSchema);
