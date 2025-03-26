const User = require("./user.model");
class UserService {
  async createUser(body) {
    const user = await User.create(body);
    delete user.dataValues.password; 
    return user;
  }
  async findUserByUsername(username){
    return await User.findOne({where:{username}})
  }
}
module.exports = new UserService();
