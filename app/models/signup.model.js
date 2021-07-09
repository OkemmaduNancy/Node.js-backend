const mongoose = require('mongoose');

const bcrypt = require('bcrypt'); // bcrypt

const SignUpSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        age: String,
        email: String,
        password: String,
        date_of_birth: String,
        upload_photo: String,
        gender: {
            type: String,
            enum: ["Male", "Female"]
        },
        marita_status: {
            type: String,
            enum: ["Married", "Single", "Engaged"]
        },
        country: String,
        job: String
    }
);

SignUpSchema.pre("save", function (next) {
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

module.exports = mongoose.model("SignUp", SignUpSchema);
