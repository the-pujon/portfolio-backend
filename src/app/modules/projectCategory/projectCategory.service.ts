import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ProjectCategory } from "./projectCategory.interface";
import ProjectCategoryModel from "./projectCategory.model";

const createProjectCategory = async (
  payload: Partial<ProjectCategory>,
): Promise<ProjectCategory> => {
  const result = await ProjectCategoryModel.create(payload);
  return result;
};

const getAllProjectCategories = async (): Promise<ProjectCategory[]> => {
  const result = await ProjectCategoryModel.find();
  return result;
};

const getProjectCategoryById = async (
  id: string,
): Promise<ProjectCategory | null> => {
  const result = await ProjectCategoryModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project Category not found");
  }
  return result;
};

const updateProjectCategory = async (
  id: string,
  payload: Partial<ProjectCategory>,
): Promise<ProjectCategory | null> => {
  const result = await ProjectCategoryModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project Category not found");
  }
  return result;
};

const deleteProjectCategory = async (id: string): Promise<void> => {
  const result = await ProjectCategoryModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project Category not found");
  }
};

export const ProjectCategoryService = {
  createProjectCategory,
  getAllProjectCategories,
  getProjectCategoryById,
  updateProjectCategory,
  deleteProjectCategory,
};
