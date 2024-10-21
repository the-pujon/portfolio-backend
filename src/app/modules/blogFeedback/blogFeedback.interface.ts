import { Types } from "mongoose";

export interface BlogFeedback {
  blog: Types.ObjectId;
  rating: number;
  email: string;
  feedback: string;
  createdAt: Date;
  updatedAt: Date;
}
