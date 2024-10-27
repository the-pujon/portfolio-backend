"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});
const SkillModel = (0, mongoose_1.model)("Skill", skillSchema);
exports.default = SkillModel;
