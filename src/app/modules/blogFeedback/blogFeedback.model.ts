import { Schema, model } from "mongoose";
import { BlogFeedback } from "./blogFeedback.interface";
//import { BlogFeedback } from "./blogFeedback.interface";

const blogFeedbackSchema = new Schema<BlogFeedback>(
  {
    blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
    rating: { type: Number, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const BlogFeedbackModel = model<BlogFeedback>(
  "BlogFeedback",
  blogFeedbackSchema,
);

export default BlogFeedbackModel;
