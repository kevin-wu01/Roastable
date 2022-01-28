const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time_created: {
        type: Date,
        required: true
    },
    conversationId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Message', MessageSchema);