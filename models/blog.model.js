import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    title: { type: String },

    short_des: { type: String },

    des: { type: String },

    img: { type: String },
  },

  {
    versionKey: false,

    timestamps: true,
  }
);
export const BlogModel = mongoose.model("blogs", dataSchema);
