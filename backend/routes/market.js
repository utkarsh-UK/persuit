const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getOverview } = require("../controllers/market");

router.get("/overview", isSignedIn, getOverview);

module.exports = router;
