import { Schema, model } from "mongoose";
import { ProjectCategory } from "./projectCategory.interface";

const projectCategorySchema = new Schema<ProjectCategory>(
  {
    name: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

const ProjectCategoryModel = model<ProjectCategory>(
  "ProjectCategory",
  projectCategorySchema,
);

export default ProjectCategoryModel;
