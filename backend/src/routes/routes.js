const express = require("express");
const aiController = require("../controllers/controller.js");

const router = express.Router();

router.post("/getReview", aiController.getResponse);

module.exports = router;
