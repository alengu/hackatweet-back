var express = require("express");
var router = express.Router();

const {
  searchTweets,
  submitTweet,
  generateMock,
} = require("../controllers/tweets");
const { checkSecurity } = require("../middlewares/security");

router.get("/", searchTweets);
router.post("/", submitTweet);
//router.post("/", checkSecurity, submitTweet);
router.get("/generateMock", generateMock);

module.exports = router;
