const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    otp: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    otpExpires: { type: Date },
    lastLogin: {
        type: Date,
        default: null
    },
    Plan: {
        type: String,
        default: 'free'
    }

});

module.exports = mongoose.model('User', userSchema);
