"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
const ProjectCategoryModel = (0, mongoose_1.model)("ProjectCategory", projectCategorySchema);
exports.default = ProjectCategoryModel;
