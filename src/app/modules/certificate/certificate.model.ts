import { Schema, model } from "mongoose";
import { Certificate } from "./certificate.interface";

const certificateSchema = new Schema<Certificate>(
  {
    title: { type: String, required: true },
    issuedBy: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    credentialLink: { type: String },
    category: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
  },
  {
    timestamps: true,
  },
);

const CertificateModel = model<Certificate>("Certificate", certificateSchema);

export default CertificateModel;
