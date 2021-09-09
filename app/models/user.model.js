const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
  {
    name: String,
    firstname: String,
    lastname: String,
    email: { type: String, unique: true, dropDups: true },
    country: String,
    age: Number,
    job: String,
    price: Number,
    color: String,
    cart: String,
    imageUrl: String,
    description: String,
    password: String,
    country: String,
    date_of_birth: Date,
    upload_photo: String,
    categories: {
      type: String,
      enum: ["Accessories", "Building", "Outfits"]
    },
    quantity: {
      require: true,
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
    },
    marita_status: {
        type: String,
      enum: ["Married", "Single", "Engaged"]
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError)
          }
          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

module.exports = mongoose.model("User", UserSchema);
