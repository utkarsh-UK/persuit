const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: `Invalid Input. ${errors.array()[0].msg}`,
      param: errors.array()[0].param,
      error: errors.array()[0],
      success: false,
    });
  }

  const user = new User(req.body);

  user.save((error, savedUser) => {
    if (error) {
      return res
        .status(400)
        .json({ message: "Error signing up user.", error, success: false });
    }

    return res.json({
      message: "User signed up successfully.",
      success: true,
      data: {
        first_name: savedUser.first_name,
        email: savedUser.email,
        id: savedUser._id,
        user_id: savedUser.user_id,
        full_name: savedUser.full_name,
      },
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: `Invalid Input. ${errors.array()[0].msg}`,
      param: errors.array()[0].param,
      error: errors.array()[0],
      success: false,
    });
  }

  const { user_id, password } = req.body;

  User.findOne({ user_id: user_id }, (error, user) => {
    if (error || !user) {
      return res
        .status(400)
        .json({ message: "User does not exist.", error, success: false });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        message: "UserID or password does not match.",
        error,
        success: false,
      });
    }

    //create token and save in cookie
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });

    const { first_name, user_id, email, _id: id, full_name } = user;
    return res.json({
      message: "User signin successfully.",
      success: true,
      data: {
        token: token,
        first_name,
        user_id,
        email,
        id,
        full_name,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.json({
    message: "User signout successfully.",
    success: true,
  });
};

// protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  requestProperty: "auth",
  algorithms: ["HS256"],
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id === req.auth._id;
  if (!checker) {
    return res.status(403).json({
      message: "ACCESS DENIED",
      error: "ACCESS DENIED",
      success: false,
    });
  }

  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      message: "You are not ADMIN, Access denied",
      error: "You are not ADMIN, Access denied",
      success: false,
    });
  }
  next();
};
