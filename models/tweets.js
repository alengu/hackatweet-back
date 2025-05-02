const mongoose = require("mongoose");

const tweetsSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  content: { type: String, required: true },
  submittedAt: Date,
  likes: { type: Number, default: 0 },
  userLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  hashtags: [{ type: mongoose.Schema.Types.ObjectId, ref: "hashtags" }],
});

const tweetsModel = mongoose.model("tweets", tweetsSchema);

module.exports = tweetsModel;
