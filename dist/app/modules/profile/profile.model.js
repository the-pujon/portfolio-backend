"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
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
    skills: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Skill" }],
    projects: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Project" }],
    experiences: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Experience" }],
    education: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Education" }],
    certifications: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Certification" }],
    awards: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Award" }],
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
}, {
    timestamps: true,
});
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
