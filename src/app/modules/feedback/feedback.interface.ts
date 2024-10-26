import { Types } from "mongoose";

interface Feedback {
  blog: Types.ObjectId;
  rating: number;
  email: string;
  feedback: string;
}

export default Feedback;
