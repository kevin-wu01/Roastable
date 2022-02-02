const express = require('express');
const auth = require('../utils/auth');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

const router = express.Router();

// get all conversations
router.get('/', (req, res) => {
    Conversation.find().then((conversations) => {
        console.log(conversations, "convos");
        res.json(conversations);
    })
    .catch((err) => {
        res.json({message: err});
    })
})

// get conversations for particular user
router.get('/get', auth.authenticateToken, (req, res) => {
    const user = res.locals.user.username;

    Conversation.find({usernames: res.locals.user.username}).then(async (convoArray) => {
        let messages = [];

        for (let idx = 0; idx < convoArray.length; idx++) {
            let convoMsgs = await Message.find({conversationId: convoArray[idx].conversationId});
            let recipiants = convoArray[idx].usernames;

            recipiants.splice(recipiants.indexOf(user), 1);

            convoMsgs = convoMsgs.map((m) => {
                let {_id, conversationId, sender, ...content} = m.toObject();
                content.self = sender === user;

                return content;
            })

            messages.push({
                conversationId: convoArray[idx].conversationId,
                recipiants,
                messages: convoMsgs
            })
        }

        res.json(messages);
    })
    .catch((err) => {
        res.json({message: "error getting user conversations"});
    })
})

// create new conversation
router.post('/',  (req, res) => {
    const convo = new Conversation({
        conversationId: 2,
        usernames: ["test", "foobar"]
    })

    convo.save()
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(400).json({message: "An error occurred."});;
    })
})

module.exports = router;