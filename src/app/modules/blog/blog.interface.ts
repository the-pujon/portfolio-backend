import { Types } from "mongoose";

export interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string[];
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  blogFeedback: Types.ObjectId[];
}
