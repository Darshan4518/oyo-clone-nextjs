import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
// UserSchema.pre("save", async function () {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });
// UserSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
// UserSchema.methods.genToken = function () {
//   return jwt.sign(
//     { id: this._id },
//     "kjdhfjksdlhfgjksdfhgjklfgjkfldhgkfjsdhgeuirhtgi",
//     { expiresIn: "30d" }
//   );
// };
const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
