import { Schema, model } from "mongoose";
import { Skill } from "./skill.interface";

const skillSchema = new Schema<Skill>(
  {
    category: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const SkillModel = model<Skill>("Skill", skillSchema);

export default SkillModel;
