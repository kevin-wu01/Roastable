const express = require('express');
const { v4: uuidV4 } = require('uuid');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})

module.exports = router;