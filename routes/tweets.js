var express = require("express");
var router = express.Router();

const {
  searchTweets,
  submitTweet,
  generateMock,
  findTweetById,
} = require("../controllers/tweets");
const { checkSecurity } = require("../middlewares/security");

router.get("/", searchTweets);
router.post("/", submitTweet);
// router.post("/", checkSecurity, submitTweet);
router.get("/generateMock", generateMock);
router.get("/userlikes/:tweetId", findTweetById);

module.exports = router;
