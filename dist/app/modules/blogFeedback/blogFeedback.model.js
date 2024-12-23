"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//import { BlogFeedback } from "./blogFeedback.interface";
const blogFeedbackSchema = new mongoose_1.Schema({
    blog: { type: mongoose_1.Schema.Types.ObjectId, ref: "Blog", required: true },
    rating: { type: Number, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
}, {
    timestamps: true,
});
const BlogFeedbackModel = (0, mongoose_1.model)("BlogFeedback", blogFeedbackSchema);
exports.default = BlogFeedbackModel;
