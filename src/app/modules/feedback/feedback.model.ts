import { Schema, model } from "mongoose";
import Feedback from "./feedback.interface";
//import { Feedback } from "./feedback.interface";

const feedbackSchema = new Schema<Feedback>({
  blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  rating: { type: Number, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
});

const FeedbackModel = model<Feedback>("Feedback", feedbackSchema);

export default FeedbackModel;
