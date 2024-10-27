"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//import { Feedback } from "./feedback.interface";
const feedbackSchema = new mongoose_1.Schema({
    blog: { type: mongoose_1.Schema.Types.ObjectId, ref: "Blog", required: true },
    rating: { type: Number, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
});
const FeedbackModel = (0, mongoose_1.model)("Feedback", feedbackSchema);
exports.default = FeedbackModel;
