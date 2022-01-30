const passport = require('passport')
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/User');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.ACCESS_TOKEN_SECRET
  },
   function (jwtPayload, done) {
       console.log("here");
     return User.findById(jwtPayload.sub)
     .then(user => 
     {
       return done(null, user);
     }
   ).catch(err => 
   {
     return done(err);
   });
  }
  ))