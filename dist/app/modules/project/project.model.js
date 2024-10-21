"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const feedbackSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
});
const projectSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const ProjectModel = (0, mongoose_1.model)("Project", projectSchema);
exports.default = ProjectModel;