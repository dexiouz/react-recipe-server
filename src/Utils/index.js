import jwt from "jsonwebtoken";

class Utils {
  async createToken(user, secret, expiresIn) {
    const { username, email } = user;
    return await jwt.sign({ username, email }, secret, {
      expiresIn,
    });
  }
}

module.exports = [Utils];
