"use strict"

const { Comic } = require('../models')

class ControllerComic {
    static read (req, res, next){
        Comic
        .findAll()
        .then(result=>{
            res.status(200).json(result)
        })
    }
    
    static edit (req, res, next){
        const {title, imageUrl, author} = req.body
        // const {id} = req.params
        
        const update = Comic.update({
            title: title,
            imageUrl: imageUrl,
            author: author
        }, {where: {
            id : req.params.id
        }, returning: true
    })
        const find = Comic.findOne({
            where:{
                id: req.params.id
            }
        })
                Promise.all([update, find])
                .then(result=>{
                    // res.send(result)
                    res.status(200).json({ comic: result[1], message: "success update comic"})
                })
                .catch(err=>{
                    res.send(err)
                })
    }
}

module.exports = ControllerComic