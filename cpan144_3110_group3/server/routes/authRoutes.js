const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser } = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", test);
router.post("/signup", registerUser);

module.exports = router;
