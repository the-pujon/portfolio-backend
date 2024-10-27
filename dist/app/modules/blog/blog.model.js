"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: [{ type: String }],
    author: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    feedback: [
        {
            rating: { type: Number, required: true },
            email: { type: String, required: true },
            feedback: { type: String, required: true },
        },
    ],
}, {
    timestamps: true,
});
const BlogModel = (0, mongoose_1.model)("Blog", blogSchema);
exports.default = BlogModel;
