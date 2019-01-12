
const express = require('express');
const configMiddleware = require('../config/middleware.js');
const actionsRouter = require('../action/actionsRouter.js');
const projectsRouter = require('../project/projectsRouter.js');

const server = express();
configMiddleware(server);

server.use( actionsRouter);
server.use( projectsRouter);


server.get('/', (req, res) => {
    res.send('server connected');
});

module.exports = server;