const express = require('express');
const cors = require('cors');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users';
        // Middlewares
        this.middlewares();

        // App's Routes
        this.routes();
    }
    middlewares(){
        // CORS
        this.app.use( cors() );
        
        // Reading and Parcing of body
        this.app.use( express.json() ); 

        // Public directory
        this.app.use( express.static('public'));
    }

    routes(){
       this.app.use(this.usersRoutePath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port , ()=>{
            console.log('Server works in port', this.port);
        });
    }
}

module.exports = Server;