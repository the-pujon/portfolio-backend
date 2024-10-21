import { Schema, model } from "mongoose";
import { Skill } from "./skill.interface";

const skillSchema = new Schema<Skill>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const SkillModel = model<Skill>("Skill", skillSchema);

export default SkillModel;
