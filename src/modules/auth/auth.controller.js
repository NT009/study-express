const AuthService = require("./auth.service");
class AuthController {
  async RegisterUser(req, res) {
    try {
      const user = await AuthService.RegisterUser(req.body);
      return res.send(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async LoginUser(req, res) {
    try {
      const user = await AuthService.LoginUser(req.body);
      return res.send(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
module.exports = new AuthController();
