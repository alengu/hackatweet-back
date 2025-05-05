const { getHashtagsByName, insertHashtag } = require("../repository/hashtags");
const { addTweet } = require("../repository/tweets");

const extractHashtags = (content) => {
  return content.match(/#[\p{L}\p{N}_]+/gu)?.map((tag) => tag.slice(1)) ?? [];
};

const findExistingHashtag = (hashtags, hashtagName) => {
  return hashtags.find((elmt) => elmt.name == hashtagName);
};

const addHashtagsAndTotal = async (data) => {
  const hashtags = extractHashtags(data.content);
  const hashtagsDb = await getHashtagsByName(hashtags);

  const hashtagIds = await hashtags.reduce(async (accPromise, hashtag) => {
    const acc = await accPromise;
    const foundHashtag = findExistingHashtag(hashtagsDb, hashtag);

    if (foundHashtag) {
      return [...acc, foundHashtag._id];
    }

    const hashtagInserted = await insertHashtag({ name: hashtag });
    return [...acc, hashtagInserted._id];
  }, Promise.resolve([]));

  return await addTweet({ ...data, hashtags: hashtagIds });
};

module.exports = { addHashtagsAndTotal };
