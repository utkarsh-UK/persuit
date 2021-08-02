const User = require("../models/user");

exports.signup = (req, res) => {
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
      data: user,
    });
  });
};

exports.signout = (req, res) => {
  return res.json({ message: "Signed out" });
};
