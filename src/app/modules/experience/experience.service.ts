import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Experience } from "./experience.interface";
import ExperienceModel from "./experience.model";
import ProfileModel from "../profile/profile.model";

const createExperience = async (
  payload: Partial<Experience>,
  userId: string,
): Promise<Experience> => {
  const result = await ExperienceModel.create(payload);

  // Update profile
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $push: { experiences: result._id } },
    { new: true },
  );

  return result;
};

const getAllExperiences = async (): Promise<Experience[]> => {
  const result = await ExperienceModel.find();
  return result;
};

const getExperienceById = async (id: string): Promise<Experience | null> => {
  const result = await ExperienceModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience not found");
  }
  return result;
};

const updateExperience = async (
  id: string,
  payload: Partial<Experience>,
): Promise<Experience | null> => {
  const result = await ExperienceModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience not found");
  }
  return result;
};

const deleteExperience = async (id: string, userId: string): Promise<void> => {
  const result = await ExperienceModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience not found");
  }

  // Update profile
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $pull: { experiences: id } },
    { new: true },
  );
};

const getProfileByUserId = async (userId: string) => {
  const profile = await ProfileModel.findOne({ user: userId });
  if (!profile) {
    throw new AppError(httpStatus.NOT_FOUND, "Profile not found");
  }
  return profile;
};

export const ExperienceService = {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
  getProfileByUserId,
};
