const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("User", brandSchema);