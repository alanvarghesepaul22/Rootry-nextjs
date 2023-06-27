import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// export default mongoose.model("User", userSchema);
const  User =  mongoose.models.User || mongoose.model("User", userSchema);
export default User;