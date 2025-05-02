const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
