require('dotenv').config();
const Server = require('./app/server')
const server = new Server();
const { sequelize } = require('./app/models/index');
server.listen();

