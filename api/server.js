
const express = require('express');
const configMiddleware = require('../config/middleware.js');
const actionsRouter = require('../action/actionsRouter.js');
const projectsRouter = require('../project/projectsRouter.js');

const path = require('path');

const server = express();
configMiddleware(server);

server.use( actionsRouter);
server.use( projectsRouter);

server.use(express.static(path.join(__dirname, 'client/public')));

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

// server.get('/', (req, res) => {
//     res.send('server connected');
// });

module.exports = server;