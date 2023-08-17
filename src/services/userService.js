const userRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
const security = require('../utils/security');


const create = async (userParam) => {
  console.log("entrei no create")
  try {

    user = await userRepository.createUser(userParam);
    return {
      statusCode: 201,
      data: user
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }
}

module.exports = {
  create
};
