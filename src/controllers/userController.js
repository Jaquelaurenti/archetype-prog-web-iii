const userService = require('../services/userService');

const create = async (req, res) => {
  console.log("estou aqui")
  const user = req.body;
  console.log(user)
  const response = await userService.create(user);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  create
};
