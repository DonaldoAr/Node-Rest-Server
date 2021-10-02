// Here have the controllers

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/user');
const user = require('../models/user');



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

const userPost = async (req, res = response)=>{
    
    
    const {name, email, password, role} = req.body; // Destructuration
    const usuario = new Usuario( {name, email, password, role} ); 

    // Check if the email exist
    const existEmail = await Usuario.findOne({email: email})
    if( existEmail ){
        return res.status(400).json({
            msg: 'The email exist already'
        });
    }

    // Encrypt password
    const salt = bcryptjs.genSaltSync(); // ten for defect
    usuario.password = bcryptjs.hashSync( password, salt);
    // Save in database
    await usuario.save(); // Save in the DB
    res.status(201).json({
        ok: true,
        usuario                 // return a database
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