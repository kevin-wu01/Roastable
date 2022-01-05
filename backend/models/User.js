const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Users', UserSchema);