const mongoose = require("mongoose");

const tweetsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    required: true,
  },
  userLikes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const tweetsModel = mongoose.model("tweets", tweetsSchema);

module.exports = tweetsModel;
