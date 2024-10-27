"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
const BlogCategoryModel = (0, mongoose_1.model)("BlogCategory", blogCategorySchema);
exports.default = BlogCategoryModel;
