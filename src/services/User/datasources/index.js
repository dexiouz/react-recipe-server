import _User from "../../../models/User";
import Base from "../../../../Base";

class User extends Base {
  constructor() {
    super("user");
  }

  // Queries
  async getCurrentUser(user) {
    return await _User.findOne({ id: user._id }).populate({
      path: "favourites",
      model: "Recipe",
    });
  }

  // Mutations

  async signupUser(data) {
    const user = await _User.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });
    if (user) {
      throw new Error("User already exists");
    }
    const newUser = await _User.create({
      ...data,
    });
    return {
      token: this.createToken(newUser, process.env.SECRET, "1hr"),
    };
  }

  async signinUser(data) {
    const user = await _User.findOne({
      $or: [{ username: data.username }, { email: data.email }],
    });
    if (!user) {
      throw new Error("No user found");
    }
    const isPasswordValid = await _User.comparePassword(
      data.password,
      user.password
    );
    if (!isPasswordValid) throw new Error("Invalid Password");
    const token = await this.createToken(user, process.env.SECRET, "1hr");
    return { token };
  }
}

module.exports = User;
