const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    usernames: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Conversation', ConversationSchema);