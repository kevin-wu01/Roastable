const express = require('express');
const router = express.Router();
const User = require('../models/User');

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
        password: req.body.password
    });
    console.log(user);
    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400);
    })
});

// get specific user
router.get('/:username', (req, res) => {
    User.find({username: req.params.username})
    .then((user) => {
        res.json(user);
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

module.exports = router;