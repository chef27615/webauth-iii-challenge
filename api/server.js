const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouters = require('../auth/authRouter')
const usersRouter = require('../users/usersRouter');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouters)
server.use('/api/users', usersRouter);

server.get('/', (req, res)=>{
    res.send('beginning of everything')
})

module.exports = server;