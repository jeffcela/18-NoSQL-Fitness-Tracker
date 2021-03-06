var path = require("path");
var express = require("express");
var router = express.Router();

// shows exercise page
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// shows stats page
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;