const HashTag = require("../models/hashtags");

const getHashtagsDb = async () => await HashTag.find({});

const getHashtagsByName = async (name) => await HashTag.find({ name });

const insertHashtag = async (data) => {
  const hashtag = new HashTag(data);
  return await hashtag.save();
};

module.exports = { getHashtagsDb, getHashtagsByName, insertHashtag };
