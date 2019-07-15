const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

const api = require('./services');

server.use(express.json());

server.use(api);

module.exports = server;
