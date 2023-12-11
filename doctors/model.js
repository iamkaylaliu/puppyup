import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("doctors", schema);
export default model;