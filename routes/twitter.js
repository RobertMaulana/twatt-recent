const express = require('express');
const router = express.Router();
const twitterController = require("../controllers/twitter_controller");

router.get("/", twitterController.twitterTimeline)

module.exports = router
