import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Certificate } from "./certificate.interface";
import CertificateModel from "./certificate.model";
import ProfileModel from "../profile/profile.model";

const createCertificate = async (
  payload: Partial<Certificate>,
  userId: string,
): Promise<Certificate> => {
  const result = await CertificateModel.create(payload);

  // Update profile
  const profile = await ProfileModel.findOne({ user: userId });
  if (profile) {
    profile.certifications = [...(profile.certifications || []), result._id];
    await profile.save();
  }

  return result;
};

const getAllCertificates = async (): Promise<Certificate[]> => {
  const result = await CertificateModel.find();
  return result;
};

const getCertificateById = async (id: string): Promise<Certificate | null> => {
  const result = await CertificateModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Certificate not found");
  }
  return result;
};

const updateCertificate = async (
  id: string,
  payload: Partial<Certificate>,
): Promise<Certificate | null> => {
  const result = await CertificateModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Certificate not found");
  }
  return result;
};

const deleteCertificate = async (id: string, userId: string): Promise<void> => {
  const result = await CertificateModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Certificate not found");
  }

  // Update profile
  const profile = await ProfileModel.findOne({ user: userId });
  if (profile) {
    profile.certifications = profile.certifications?.filter(
      (certId) => certId.toString() !== id,
    );
    await profile.save();
  }
};

export const CertificateService = {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
};
