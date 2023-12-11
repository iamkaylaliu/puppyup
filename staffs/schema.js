import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    park: { type: mongoose.Schema.Types.ObjectId, ref: "parks" },
    phoneNumber: String,
    email: String,
    address: String,
  },
  { collection: "staffs" }
);

export default schema;