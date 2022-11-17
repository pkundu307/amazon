const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  email: String,
  password: String,
  fullName: String,
});

module.exports = mongoose.model("orders", OrderSchema);
