import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("vets", schema);
export default model;