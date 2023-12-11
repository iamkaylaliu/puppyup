import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("staffs", schema);
export default model;