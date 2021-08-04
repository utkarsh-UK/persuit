const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup, signin, signout } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("first_name", "First Name should be at least 3 chars").isLength({
      min: 3,
    }),
    check("email", "Email should be valid").isEmail(),
    check(
      "user_id",
      "User ID should contain at least 4 digits and should be 6 chars long."
    )
      .isLength({ min: 6, max: 6 })
      .matches(/\d{4}/),
    check("password", "Password should be at least 3 chars").isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check(
      "user_id",
      "User ID should contain at least 4 digits and should be 6 chars long."
    )
      .isLength({ min: 6, max: 6 })
      .matches(/\d{4}/),
    check("password", "Password should be at least 3 chars").isLength({
      min: 3,
    }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
