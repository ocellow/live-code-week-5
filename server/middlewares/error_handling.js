"use strict"

const jwt = require('jsonwebtoken')

function showError(err, req, res, next){
    res.send(err)    
}

module.exports=showError