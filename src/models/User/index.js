import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "You need a username"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    favourites: {
      type: ["Schema.type.Objectid"],
      ref: "Recipe",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.comparePassword = async (password, userPassword) =>
  await bcrypt.compare(password, userPassword);

// ===================================================================
//HASH PASSWORD BEFORE SAVING
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

module.exports = mongoose.model("User", UserSchema);
