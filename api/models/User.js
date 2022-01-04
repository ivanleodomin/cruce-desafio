const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
    required: true,
  },
  appToken: {
    type: String,
    required: true,
  },
  metodoDeFacturacion: {
    type: String,
    required: true,
  },
  isActive: { type: Boolean, default: true },
});

module.exports = model("User", userSchema);
