const express = require('express');
const cors = require('cors');
const dbConnection = require('../Database/database');

class Server  {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.userPath = '/api/user';
        this.incidentPath = '/api/incident';
        
        // validadores
        this.middlewares();

        // rutas
        this.routes();

        // conectar a la base de datos
        this.conectarDB();
    }

   async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.userPath, require('../Routes/userRoutes'));
        this.app.use(this.incidentPath, require('../Routes/incidentRoutes'));
    }

    listen(){
        this.app.listen(8080, ()=>{
            console.log('Servidor corriendo en el puerto', 8080);
        })
    }
}

module.exports = Server; 