import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "VENDOR"],
      default: "USER",
    },
    birthday: Date,
    breed: String,
    gender: {
        type: String,
        enum: ["Male", "Female"],
      },
    firstName: String,
    headshot: String,
  },
  { collection: "users" }
);
export default schema;