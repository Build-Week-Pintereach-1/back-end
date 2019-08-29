const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const server = express();



// Heroku server use, allows others to access your heroku backend, else you will receive a CORS error when a Front
// End dev tries to pull anything from your DB
server.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
})

const softserver = require('./api/server')

server.use(softserver);

server.use(helmet());
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3800;

server.listen(port, () => {
   console.log(`port working${port}`);
})
