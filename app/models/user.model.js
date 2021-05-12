const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    country: String,
    gender: {
      type: String,
      enum: ["female", "male"],
      default: "male",
    },
    age: Number,
    password: {
        type: String,
        require: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
