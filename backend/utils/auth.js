const jwt = require('jsonwebtoken');

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

function authenticateSocketToken(token) {
    token = token.replace(/['"]+/g, '');

    return new Promise((resolve) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) resolve({err: "unauthorized"});
    
            resolve(user);
        })
    })
}

module.exports = {authenticateToken, authenticateSocketToken};