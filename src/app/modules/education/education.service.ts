import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Education } from "./education.interface";
import EducationModel from "./education.model";
import ProfileModel from "../profile/profile.model";

const createEducation = async (
  payload: Partial<Education>,
  userId: string,
): Promise<Education> => {
  const result = await EducationModel.create(payload);

  // Update profile with new education
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $push: { education: result._id } },
    { new: true },
  );

  return result;
};

const getAllEducations = async (): Promise<Education[]> => {
  const result = await EducationModel.find();
  return result;
};

const getEducationById = async (id: string): Promise<Education | null> => {
  const result = await EducationModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Education not found");
  }
  return result;
};

const updateEducation = async (
  id: string,
  payload: Partial<Education>,
): Promise<Education | null> => {
  const result = await EducationModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Education not found");
  }
  return result;
};

const deleteEducation = async (id: string, userId: string): Promise<void> => {
  const result = await EducationModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Education not found");
  }

  // Remove education from profile
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $pull: { education: id } },
    { new: true },
  );
};

export const EducationService = {
  createEducation,
  getAllEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
};
