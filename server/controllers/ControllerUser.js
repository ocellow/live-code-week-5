"use strict"

const User = require('../models').User
const jwt = require('jsonwebtoken')

class ControllerUser {
    static login (req, res, next){
        const {email, password} = req.body
        // res.send("masukk?")
        User
        .findOne({
            where:{
                email: email,
                password:password
            }
        })
        .then(result=>{
            // res.status(400).json(result)
            if (result) {
                var token = jwt.sign({ 
                    email: result.email
                 }, process.env.secretCode);
                 res.status(200).json({access_token : token})
            } else {
                throw {
                    statusCode: 400,
                    msg: "Wrong Password/Username"
                }
            }
        })
        .catch (err=>{
            // next(err)
            res.send(err)
        })
    }

    static register (req, res, next){
        let {name, email, password } = req.body
        User
        .create({
            name,
            email,
            password
        })
        .then(result =>{
            var token = jwt.sign({ 
                    email: result.email
                 }, process.env.secretCode);
                 res.status(200).json({access_token : token}
        )
    })
    .catch (err =>{
        next(err)
    })
    }
}

module.exports=ControllerUser