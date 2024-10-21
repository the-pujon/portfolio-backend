import { Schema, model } from "mongoose";
import { Education } from "./education.interface";

const educationSchema = new Schema<Education>(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const EducationModel = model<Education>("Education", educationSchema);

export default EducationModel;
