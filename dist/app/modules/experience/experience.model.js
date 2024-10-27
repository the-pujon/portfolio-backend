"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, {
    timestamps: true,
});
const ExperienceModel = (0, mongoose_1.model)("Experience", experienceSchema);
exports.default = ExperienceModel;
