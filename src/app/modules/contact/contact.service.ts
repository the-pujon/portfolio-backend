import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Contact } from "./contact.interface";
import ContactModel from "./contact.model";

const createContact = async (payload: Contact): Promise<Contact> => {
  const result = await ContactModel.create(payload);
  return result;
};

const getAllContacts = async (): Promise<Contact[]> => {
  const result = await ContactModel.find();
  return result;
};

const getContactById = async (id: string): Promise<Contact | null> => {
  const result = await ContactModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Contact not found");
  }
  return result;
};

const deleteContact = async (id: string): Promise<void> => {
  const result = await ContactModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Contact not found");
  }
};

export const ContactService = {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
};
