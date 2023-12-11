import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    vetName: { type: String, unique: true, required: true },
    address: String,
    phoneNumber: String,
    servicesOffered: String,
    operatingHours: String,
    website: String,
    ratings: String,
  },
  { collection: "vets" }
);
export default schema;