import { Schema, model } from "mongoose";
import { Project } from "./project.interface";
import { number } from "zod";

const feedbackSchema = new Schema({
  rating: { type: Number, required: true },
  email: { type: String, required: true },
  feedback: { type: String, required: true },
});

const projectSchema = new Schema<Project>(
  {
    title: { type: String },
    shortDescription: { type: String },
    fullDescription: { type: String },
    thumbnailImage: { type: String },
    images: [{ type: String }],
    videoDemo: { type: String },
    liveLink: { type: String },
    clientGithub: { type: String },
    serverGithub: { type: String },
    category: { type: String },
    projectDuration: { type: String },
    projectTeamSize: { type: String },
    projectType: { type: String },
    projectStatus: { type: String },
    projectStack: { type: String },
    projectChallenges: { type: String },
    tags: [{ type: String }],
    technologies: [{ type: String }],
    keyFeatures: [{ type: String }],
    challenges: [{ type: String }],
    solutions: [{ type: String }],
    feedbacks: [feedbackSchema],
    priority: { type: Number },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const ProjectModel = model<Project>("Project", projectSchema);

export default ProjectModel;
