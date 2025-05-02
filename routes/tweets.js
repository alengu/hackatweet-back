var express = require("express");
var router = express.Router();

const { searchTweets } = require("../controllers/tweets");
const { checkSecurity } = require("../middlewares/security");

router.get("/", checkSecurity, searchTweets);

module.exports = router;
