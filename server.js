"use strict";
const express = require("express");
const path = require("path");
const compression = require("compression");

const server = express();

const PORT = process.env.port || 3000;

server.use(compression());
server.use(express.static(path.join(__dirname, 'build')));


server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(PORT, () => {
	console.log(`the server is listening on port ${PORT}`)
});