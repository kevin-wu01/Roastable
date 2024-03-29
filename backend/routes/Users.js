const express = require('express');
const router = express.Router();
const User = require('../models/User');
// import { authenticateToken } from '../utils/auth';
const auth = require('../utils/auth');

const jwt = require('jsonwebtoken');
// const passport = require('../utils/passport');

// get all users
router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    })
    .catch((err) => {
        res.json({message: err});
    })
});

// create new user
router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    User.find({username: req.body.username})
    .then((existingUser) => {
        if (existingUser.length !== 0) {
            res.status(200).json({message: "Username already in use."});
            return true;
        } else {
            return false;
        }
    })
    .then((exists) => {
        if (!exists) {
            user.save()
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(400).json({message: "An error occurred."});;
            })
        }
    })
});

// get specific user
router.get('/get', auth.authenticateToken, (req, res) => {
    console.log("GET " + res.locals.user.username);
    User.find({username: res.locals.user.username})
    .then((usersArray) => {
        const { _id, password, ...userData } = usersArray[0].toObject();

        res.json(userData);
    })
    .catch((err) => {
        res.json({message: err});
    });
});

// delete user
router.delete('/:username', (req, res) => {
    User.remove({username: req.params.username})
    .then((user) => {

    })
    .catch((err) => {

    })
});

// update user
router.patch('/:username', (req, res) => {
    User.updateOne({username: req.params.username}, 
        {$set: {password: req.body.password}}
        )
    .then((updatedUser) => {
        res.json(updatedUser);
    })
    .catch((err) => {
        res.json({message: err});
    })
})

// login user
router.post('/login', async (req, res) => {
    console.log("/login endpoint hit");
    User.find({username: req.body.username, password: req.body.password})
    .then((user) => {
        if (user.length === 0) {
            res.send({message: "The username or password you entered is incorrect."});
        } else {
            if (user.length !== 1) {
                res.send({message: "An error occurred"});
            } else {
                const token = jwt.sign(user[0].toJSON(), process.env.ACCESS_TOKEN_SECRET);
                console.log("Authenticated " + req.body.username);
                res.json({
                    token: token
                })
            }
        }
    })
    .catch((err) => {
        console.log(err, "err");
        res.json({message: err});
    })
})

router.post('/validate', auth.authenticateToken, (req, res) => {
    res.send({code: 1});
})
/*
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    let token = authHeader && authHeader.split(' ')[1];
    token = token.replace(/['"]+/g, '');

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        res.locals.user = user;
        next();
    });
}
*/
module.exports = router;