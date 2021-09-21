const { response } = require('express');

const userGet = (req, res = response)=>{
    //res.send('Hello World');
    res.json({
    //res.status(403).json({
        ok: true,
        msg: 'get API - controller'
    });
}

module.exports = {
    userGet
}