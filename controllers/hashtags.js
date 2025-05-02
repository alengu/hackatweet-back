const { getHashtagsAndTotal } = require("../services/hashtagServices");

const getHashtags = async (req, res, next) => {
  try {
    const hashtags = await getHashtagsAndTotal();

    res.json(hashtags);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getHashtags };
