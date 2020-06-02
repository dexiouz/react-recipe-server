import { AuthenticationError } from "apollo-server-express";
import Many from "extends-classes";
import Utils from "./src/Utils";

class Base extends Many(...Utils) {
  async isLoggedIn(user) {
    if (!user) {
      throw new AuthenticationError("Login to Continue");
    }
  }
}

module.exports = Base;
