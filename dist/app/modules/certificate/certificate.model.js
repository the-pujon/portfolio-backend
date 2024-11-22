"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const certificateSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    issuedBy: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    credentialLink: { type: String },
    category: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
}, {
    timestamps: true,
});
const CertificateModel = (0, mongoose_1.model)("Certificate", certificateSchema);
exports.default = CertificateModel;
