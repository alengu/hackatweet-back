const { getTweets,addTweet } = require("../repository/tweets");

const searchTweets = async (req, res, next) => {
  try {
    const tweets = await getTweets();

    res.json(tweets);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const submitTweet=async(req, res, next) => {
  try {
    console.log(" controllers adding tweet->",req.body);
    const submittedTweet = await addTweet(req.body);
    res.json(submittedTweet);
    return submittedTweet;
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "internal Servor Error with db" });
  }
}


module.exports = { searchTweets, submitTweet };
