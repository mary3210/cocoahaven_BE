// const passport = require('passport')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// const {Strategy, ExtractJwt} = require('passport-jwt')

// const User = require('../models/User')

// const secret = process.env.JWT_SECRET || 'yolo unique secrets'

// const opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: secret
// }

// const verify = async (jwt_payload, done) => {
//     try {
//         const user = await User.findById(jwt_payload.id)
//         return done(null, user)
//     } catch(err){
//         return done(err)
//     }
// }

// const strategy = new Strategy(opts, verify)

// passport.use(strategy)
// passport.initialize()

// const requireToken = passport.authenticate('jwt', {session: false})

// const createUserToken = (req, user) => {
//     if( 
//         !user || 
//         !req.body.password ||
//         !bcrypt.compareSync(req.body.password, user.password)

//     ){
//         const error = new Error("The provided usesrname or password is incorrect")
//         error.statusCode = 442
//         throw error}
//         return jwt.sign({id: user._id},secret,{exspiresIn: 36000})
//     }

//     module.exports = { 
//     requireToken,
//     createUserToken
// }
