const express = require('express');
const routesUsers = express.Router();
const verifyJWT = require('../middlewares/verifyToken');

// importando o controller
const UserController = require('../controllers/UserController');
routesUsers.post('', UserController.create);

module.exports = routesUsers;