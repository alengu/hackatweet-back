const { getHashtagsDb } = require("../repository/hashtags");
const { addTweet } = require("../repository/tweets");

const { getNbTweetsByHashtag } = require("../repository/tweets");

const getHashtagsAndTotal = async () => {
  const hashtags = await getHashtagsDb();
  const promises = hashtags.map(async (hashtag) => {
    return {
      _id: hashtag["_id"],
      name: hashtag.name,
      nbTweets: await getNbTweetsByHashtag(hashtag["_id"]),
    };
  });

  const data = await Promise.all(promises);
  const sortedData = data.sort((a, b) => b.nbTweets - a.nbTweets);

  return sortedData.filter((elm) => elm.nbTweets > 0);
};

module.exports = { getHashtagsAndTotal };
