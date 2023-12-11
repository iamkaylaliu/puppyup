import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    doctorName: { type: String, required: true },
    vet: { type: mongoose.Schema.Types.ObjectId, ref: "vets" },
    phoneNumber: String,
    servicesOffered: String,
    ratings: String,
  },
  { collection: "doctors" }
);

export default schema;
