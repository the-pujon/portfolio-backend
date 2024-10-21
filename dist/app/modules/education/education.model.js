"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, {
    timestamps: true,
});
const EducationModel = (0, mongoose_1.model)("Education", educationSchema);
exports.default = EducationModel;
