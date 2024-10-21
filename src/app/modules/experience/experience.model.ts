import { Schema, model } from "mongoose";
import { Experience } from "./experience.interface";

const experienceSchema = new Schema<Experience>(
  {
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const ExperienceModel = model<Experience>("Experience", experienceSchema);

export default ExperienceModel;
