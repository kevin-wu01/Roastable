const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./utils/auth');
let cors = require('cors');

const http = require('http');
const server = http.createServer(app);
let io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
require('dotenv/config');

//middleware
/*
app.use('/', () => {
    console.log("test");
})
*/
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/Post');
const usersRoute = require('./routes/Users');
const conversationRoute = require('./routes/Conversation');
const Message = require('./models/Message');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);
app.use('/conversation', conversationRoute);

//routes
app.get('/', (req, res) => {
    res.send("foobar");
})

console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to db");
})

io.use((socket, next) => {
    // console.log(socket.handshake.auth.token);
    auth.authenticateSocketToken(socket.handshake.auth.token, next)
    .then((authRes) => {
        if (authRes.err) {
            socket.emit('error', authRes.err);
        }

        socket.user = authRes;
        next();
    });
})

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');

    // socket.emit('message', 'Welcome to Roastable');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });

    socket.on('chatMessage', (msg) => {
        const currDate = new Date();
        const dbMsg = new Message({
            sender: msg.sender,
            content: msg.content,
            time_created: currDate,
            conversationId: msg.conversationId
        })

        dbMsg.save()
        .then((data) => {
            const {_id, __v, sender, ...savedMsg} = data.toObject();
            console.log(savedMsg, "data");
            socket.in(msg.conversationId.toString()).emit('message', savedMsg, false);
            socket.emit('message', savedMsg, true);
        })
        .catch((err) => {
            socket.emit('error', "err");
        })
    })
//
    socket.on('join', (id) => {
        socket.join(id.toString());

        console.log("user joined room " + id.toString());
    })
 });

server.listen(4321);
/*
http.listen(4321, () => {
    console.log("http listening");
})
*/