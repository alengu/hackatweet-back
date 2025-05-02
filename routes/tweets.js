var express = require("express");
var router = express.Router();

const { searchTweets, submitTweet } = require("../controllers/tweets");
const { checkSecurity } = require("../middlewares/security");

router.get("/", searchTweets);
router.post("/", checkSecurity, submitTweet);
router.get("/generateMock", generateMock);

module.exports = router;
