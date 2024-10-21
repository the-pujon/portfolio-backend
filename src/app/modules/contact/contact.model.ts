import { Schema, model } from "mongoose";
import { Contact } from "./contact.interface";

const contactSchema = new Schema<Contact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const ContactModel = model<Contact>("Contact", contactSchema);

export default ContactModel;
