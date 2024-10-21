import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Experience } from "./experience.interface";
import ExperienceModel from "./experience.model";

const createExperience = async (
  payload: Partial<Experience>,
): Promise<Experience> => {
  const result = await ExperienceModel.create(payload);
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

const deleteExperience = async (id: string): Promise<void> => {
  const result = await ExperienceModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience not found");
  }
};

export const ExperienceService = {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
};
