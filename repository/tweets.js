const Tweet = require("../models/tweets");

const getTweets = async () => {
  return await Tweet.find({}).sort({ submittedAt: -1 });
};

const addTweet = async (data) => {
  console.log("repo - data that will be posted in the db : ", data);
  let newTweet = new Tweet({ ...data });

  await newTweet.save();
  console.log("repo - new tweet loaded: ", newTweet);
  return newTweet;
};

const getNbTweetsByHashtag = async (hashtagId) => {
  return await Tweet.countDocuments({ hashtags: hashtagId });
};

const getTweetById = async (tweetId) => {
  return await Tweet.findById(tweetId);
}
module.exports = { getTweets, getNbTweetsByHashtag, addTweet,getTweetById };
