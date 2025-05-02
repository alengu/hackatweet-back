var express = require("express");
var router = express.Router();

const { getHashtags } = require("../controllers/hashtags");

router.get("/", getHashtags);

module.exports = router;
