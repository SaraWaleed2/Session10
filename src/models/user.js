const mongoose = require("mongoose")
const User = mongoose.model("User", {

    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        default: 18,
    },
    city: {
        type: String
    }

}
)
module.exports = User