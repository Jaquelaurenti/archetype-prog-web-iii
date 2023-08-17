const User = require('../entities/user');

const createUser = async (user) => {
  console.log("e=create ")
  return await User.create(user);
}

const findUserByTelephone = async (telephone) => {
  console.log("entrei no find user")
  return await User.findOne({ telephone: telephone });
}
module.exports = {
  createUser, findUserByTelephone
}
