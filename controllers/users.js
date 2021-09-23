// Here have the controllers

const { response } = require('express');

const userGet = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'get API - controller'
    });
}

const userPut = (req, res)=>{
    res.status(500).json({
        ok: true,
        msg: 'put API -  controller',
        data: [0, 1.2, 3.589]
    });
}

const userPost = (req, res)=>{
    const {nombre, apellido} = req.body;
    res.status(201).json({
        ok: true,
        msg: 'post API -  controller',
        data: [0, 1.2, 3.589],
        nombre,
        apellido
    });
}

const userDelete = (req, res)=>{
    res.json({
        ok: true,
        msg: 'delete API - controller',
        data: [0, 1.2, 3.589]
    });
}

const userPatch = (req, res)=>{
    res.json({
        ok: true,
        msg: 'delete API - controller',
        tipe: 'patch',
        data: [0, 1.2, 3.589]
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}