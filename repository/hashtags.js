const HashTag = require("../models/hashtags");

const getHashtagsDb = async () => await HashTag.find({});

module.exports = { getHashtagsDb };
