import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    itemId: String,
    content: String,
    time: { type: Date, default: Date.now },
    photo: String,
  },
  { collection: "posts" }
);

export default schema;