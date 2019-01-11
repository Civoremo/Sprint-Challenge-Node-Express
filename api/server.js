
const express = require('express');
const configMiddleware = require('../config/middleware.js');
const actionsRouter = require('../action/actionsRouter.js');

const server = express();
configMiddleware(server);

server.use('/actions', actionsRouter);


server.get('/', (req, res) => {
    res.send('server connected');
});


module.exports = server;