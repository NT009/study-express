const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
class AuthService {
  async RegisterUser(body) {
    const hashedPassword = await bcrypt.hash(
      body.password,
      Number(process?.env?.SALT)
    );
    body.password = hashedPassword;
    const user = await userService.createUser(body);
    return user;
  }                   

  async LoginUser(body) {
    const user =await userService.findUserByUsername(body.username);
    if (!user) throw new Error("invalid credentials!");
    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) throw new Error("invalid credentials!");
    return user;
  }
}
module.exports = new AuthService();
