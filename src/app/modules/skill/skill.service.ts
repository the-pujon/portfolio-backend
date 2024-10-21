import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Skill } from "./skill.interface";
import SkillModel from "./skill.model";

const createSkill = async (payload: Partial<Skill>): Promise<Skill> => {
  const result = await SkillModel.create(payload);
  return result;
};

const getAllSkills = async (): Promise<Skill[]> => {
  const result = await SkillModel.find();
  return result;
};

const getSkillById = async (id: string): Promise<Skill | null> => {
  const result = await SkillModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }
  return result;
};

const updateSkill = async (
  id: string,
  payload: Partial<Skill>,
): Promise<Skill | null> => {
  const result = await SkillModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }
  return result;
};

const deleteSkill = async (id: string): Promise<void> => {
  const result = await SkillModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found");
  }
};

export const SkillService = {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
};
