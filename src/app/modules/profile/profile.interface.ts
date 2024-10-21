import { Types } from "mongoose";

export interface Profile {
  name?: string;
  email?: string;
  designation?: string;
  department?: string;
  location?: {
    city?: string;
    country?: string;
  };
  heroImage?: string;
  about?: string;
  aboutImage?: string;
  skills?: Types.ObjectId[];
  projects?: Types.ObjectId[];
  experiences?: Types.ObjectId[];
  education?: Types.ObjectId[];
  certifications?: Types.ObjectId[];
  awards?: Types.ObjectId[];
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    leetcode?: string;
  };
  introduction?: string;
  resume?: string;
  projectCategory?: string;
}
