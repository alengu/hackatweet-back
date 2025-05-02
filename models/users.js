const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  username: { type: String, required: true },
  token: { type: String, required: true },
  hash: String,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
