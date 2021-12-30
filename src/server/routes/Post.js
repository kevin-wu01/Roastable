const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("posts");
})

router.get('/foo', (req, res) => {
    res.send("posts yay");
})

module.exports = router;