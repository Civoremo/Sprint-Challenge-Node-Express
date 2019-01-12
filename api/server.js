
const express = require('express');
const configMiddleware = require('../config/middleware.js');
const actionsRouter = require('../action/actionsRouter.js');
const projectsRouter = require('../project/projectsRouter.js');

const path = require('path'); // heroku
server.use(express.static(path.join(__dirname, 'client/build'))); // heroku

const server = express();
configMiddleware(server);

server.use( actionsRouter);
server.use( projectsRouter);


// server.get('/', (req, res) => {
//     res.send('server connected');
// });


server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


module.exports = server;