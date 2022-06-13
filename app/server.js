const express = require('express')
const { sequelize } = require('./models/index');


class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares-funcion quese ejecuta al levantar el servidor
    this.middleware();
    this.app.use(express.json());

    //Rutas de api
    this.routes();
  }

  middleware() {

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {

    this.app.use(require('./routes/routes'))

  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('Conectado al servidor de RTP', process.env.PORT)
      sequelize.authenticate().then(() => {
          console.log('Connected to the database');
        })
    })



  }
}

module.exports = Server;


















// require('dotenv').config();
// const express = require('express');
// const app = express();
// const { sequelize } = require('./index');


// //Settings
// // const PORT = process.env.PORT || 3000;

// //Middlewares

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //Rutas

// app.use(require('../routes/routes'))

// app.listen(process.env.PORT, () => {
//   console.log( 'Conectado al servidor de RTP', process.env.PORT)

//   sequelize.authenticate().then(() => {
//     console.log('Connected to the database');
//   })

// })
