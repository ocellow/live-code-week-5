"use strict"

const jwt = require('jsonwebtoken')

module.exports= (req, res, next)=>{
    try {
        let token = req.headers.token
        let user = jwt.verify(token, process.env.secretCode)
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}