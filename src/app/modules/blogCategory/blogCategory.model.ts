import { Schema, model } from "mongoose";
import { BlogCategory } from "./blogCategory.interface";

const blogCategorySchema = new Schema<BlogCategory>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

const BlogCategoryModel = model<BlogCategory>(
  "BlogCategory",
  blogCategorySchema,
);

export default BlogCategoryModel;
