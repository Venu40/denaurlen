import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  grossCoins: Number,
  netCoins: Number,
});
const User = mongoose.model("User", userSchema);
export default User;
