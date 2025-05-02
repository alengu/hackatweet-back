const mongoose = require("mongoose");

const hashtagsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const hashtagsModel = mongoose.model("hashtags", hashtagsSchema);

module.exports = hashtagsModel;
