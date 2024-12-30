const express = require("express");
const authcontroller = require("./authController");

const router = express.Router();
router.get("/login", authcontroller.login);
router.get("/check", authcontroller.check);
router.post("/signup", authcontroller.signup);
router.get("/", authcontroller.getAll);

module.exports = router;
