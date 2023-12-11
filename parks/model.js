import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("parks", schema);
export default model;