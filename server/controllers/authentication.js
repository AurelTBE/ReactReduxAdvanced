const User = require("../models/user")
const lodash = require("lodash")
const jwt = require("jwt-simple")
const config = require("../../config")

function getTokenForUser(user) {
    const timeStamp = new Date().getTime()
    return jwt.encode({
        sub: user.id,
        iat: timeStamp
    }, config.secret)
}

exports.signup = function(req, res, next) {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email}, function(err, existingUser) {
        if(err) {
            return next(err)
        }
        if(existingUser) {
            return res.status(422).send({error: "Email déjà utilisé"})
        }
        if(lodash.isEmpty(email)||lodash.isEmpty(password)) {
            return res.status(422).send({error: "Email ou Mot de passe manquant"})
        } else {
            const user = new User({
                email: email,
                password: password
            })
            user.save(function(err) {
                if(err) {
                    return next(err)
                } else {
                    res.json({token: getTokenForUser(user)})
                }
            })
        }
    })

    console.log(`Email : ${email} - Password : ${password}`)
}

exports.signin = function(req, res, next) {
    res.json({token: getTokenForUser(req.user)})
}