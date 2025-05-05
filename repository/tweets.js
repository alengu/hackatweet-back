const Tweet = require("../models/tweets");
const mongoose = require("mongoose");

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
  return await Tweet.countDocuments({
    hashtags: new mongoose.Types.ObjectId(hashtagId),
  });
};

const getTweetById = async (tweetId) => {
  return await Tweet.findById(tweetId);
};

const likeTweet = async (tweetId, userId) => {
  return await Tweet.updateOne(
    { _id: tweetId },
    { $push: { userLikes: userId } }
  );
};

const unLikeTweet = async (tweetId, userId) => {
  return await Tweet.updateOne(
    { _id: tweetId },
    { $pull: { userLikes: userId } }
  );
};

const deleteTweetById = async (tweetId) => {
  return await Tweet.deleteOne({ _id: tweetId });
};
module.exports = {
  getTweets,
  getNbTweetsByHashtag,
  addTweet,
  getTweetById,
  deleteTweetById,
  likeTweet,
  unLikeTweet,
};
