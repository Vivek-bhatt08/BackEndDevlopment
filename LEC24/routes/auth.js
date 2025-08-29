const express = require("express");
const router = express.Router();
const {postLoginCheck} = require("../controller/authController")

router.post("/",postLoginCheck);

module.exports = router;
