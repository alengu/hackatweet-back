const { getHashtagsDb } = require("../repository/hashtags");
const { getNbTweetsByHashtag } = require("../repository/tweets");

const getHashtagsAndTotal = async () => {
  const hashtags = await getHashtagsDb();

  const data = hashtags.map(async (hashtag) => {
    return {
      _id: hashtag["_id"],
      name: hashtag.name,
      nbTweets: await getNbTweetsByHashtag(hashtag["_id"]),
    };
  });

  console.log(await Promise.all(data));

  return await Promise.all(data);
};

module.exports = { getHashtagsAndTotal };
