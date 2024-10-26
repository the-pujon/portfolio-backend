import { Schema, model } from "mongoose";
import { Blog } from "./blog.interface";

const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: [{ type: String }],
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    feedback: [
      {
        rating: { type: Number, required: true },
        email: { type: String, required: true },
        feedback: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const BlogModel = model<Blog>("Blog", blogSchema);

export default BlogModel;
