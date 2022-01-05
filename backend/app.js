const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let cors = require('cors')
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

app.listen(4321);