import mongoose from "mongoose";
// ============================
const { Schema, model } = mongoose;
const todoSchema = new Schema(
  {
    description: { type: String },
  },
  { timestamps: true }
);
export default model("todo", todoSchema);
