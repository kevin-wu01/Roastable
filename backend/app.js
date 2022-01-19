const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
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

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

//routes
app.get('/', (req, res) => {
    res.send("foobar");
})

console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to db");
})

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

app.listen(4321);
/*
http.listen(4321, () => {
    console.log("http listening");
})
*/