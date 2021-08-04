const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxLength: 6,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
    },
    last_name: {
      type: String,
      trim: true,
      maxLength: 32,
      default: "",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    salt: String,
    encry_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// virtual fields
userSchema.virtual("password").set(function (password) {
  this._password = password;
  this.salt = uuid.v1();
  this.encry_password = this.securePassword(password);
});

// virtual fields
userSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

// encrypt password
userSchema.methods = {
  authenticate: function (password) {
    return this.securePassword(password) === this.encry_password;
  },
  securePassword: function (plainPassword) {
    if (!plainPassword) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
