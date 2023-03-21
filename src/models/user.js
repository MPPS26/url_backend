const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        min:3,
        max:10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min:8,
        max:30
    }, 
    password: {
        type: String,
        required: true,
        min:4,
        max:30
    },
})

module.exports = mongoose.model ('User', userSchema);