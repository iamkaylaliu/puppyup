import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    parkName: { type: String, required: true },
    location: String,
    sizeAcres: String,
    
  },
  { collection: "parks" }
);
export default schema;