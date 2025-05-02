var express = require("express");
var router = express.Router();

const { searchTweets, generateMock } = require("../controllers/tweets");
const { checkSecurity } = require("../middlewares/security");

router.get("/", checkSecurity, searchTweets);
router.get("/generateMock", generateMock);

module.exports = router;
