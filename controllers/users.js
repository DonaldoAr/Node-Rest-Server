// Here have the controllers

const { response, request } = require('express');

const userGet = (req = request, res = response)=>{
    const {q, nombre='No name', key} = req.query;
    res.json({
        ok: true,
        msg: 'get API - controller',
        q,
        nombre,
        key
    });
}

const userPut = (req, res = response)=>{
    const id = req.params.id;
    res.status(500).json({
        ok: true,
        msg: 'put API -  controller',
        data: [0, 1.2, 3.589],
        id
    });
}

const userPost = (req, res = response)=>{
    const {nombre, apellido} = req.body;
    res.status(201).json({
        ok: true,
        msg: 'post API -  controller',
        data: [0, 1.2, 3.589],
        nombre,
        apellido
    });
}

const userDelete = (req, res = response)=>{
    res.json({
        ok: true,
        msg: 'delete API - controller',
        data: [0, 1.2, 3.589]
    });
}

const userPatch = (req, res = response)=>{
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