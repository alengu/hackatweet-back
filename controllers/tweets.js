const { getTweets } = require("../repository/tweets");

const searchTweets = async (req, res, next) => {
  try {
    const tweets = await getTweets();

    res.json(tweets);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { searchTweets };
