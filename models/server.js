const express = require('express');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // App's Routes


        this.routes();
    }
    middlewares(){
        // Public directory
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res)=>{
            //res.send('Hello World');
            res.json({
            //res.status(403).json({
                ok: true,
                msg: 'get API'
            });
        });
        this.app.put('/api', (req, res)=>{
            //res.send('Hello World');
            res.json({
            //res.status(403).json({
                ok: true,
                msg: 'put API',
                data: [0, 1.2, 3.589]
            });
        });
        this.app.post('/api', (req, res)=>{
            //res.send('Hello World');
            res.json({
            //res.status(403).json({
                ok: true,
                msg: 'post API',
                data: [0, 1.2, 3.589]
            });
        });
        this.app.delete('/api', (req, res)=>{
            //res.send('Hello World');
            res.json({
            //res.status(403).json({
                ok: true,
                msg: 'delete API',
                data: [0, 1.2, 3.589]
            });
        });
    }

    listen(){
        this.app.listen(this.port , ()=>{
            console.log('Server works in port', this.port);
        });
    }
}

module.exports = Server;