import { Schema, model } from "mongoose";
import { Profile } from "./profile.interface";

const profileSchema = new Schema<Profile>(
  {
    name: { type: String },
    email: { type: String },
    designation: { type: String },
    department: { type: String },
    location: {
      city: { type: String },
      country: { type: String },
    },
    heroImage: { type: String },
    about: { type: String },
    aboutImage: { type: String },
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
    experiences: [{ type: Schema.Types.ObjectId, ref: "Experience" }],
    education: [{ type: Schema.Types.ObjectId, ref: "Education" }],
    certifications: [{ type: Schema.Types.ObjectId, ref: "Certification" }],
    awards: [{ type: Schema.Types.ObjectId, ref: "Award" }],
    socialMedia: {
      linkedin: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      github: { type: String },
      leetcode: { type: String },
    },
    introduction: { type: String },
    resume: { type: String },
    projectCategory: { type: String },
  },
  {
    timestamps: true,
  },
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
