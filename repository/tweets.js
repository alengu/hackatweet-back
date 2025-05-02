const Tweet = require("../models/tweets");

const getTweets = async () => {
  return await Tweet.find({}).sort({ submittedAt: -1 });
};

module.exports = { getTweets };
