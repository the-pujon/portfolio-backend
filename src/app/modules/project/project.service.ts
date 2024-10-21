import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Project } from "./project.interface";
import ProjectModel from "./project.model";

const createProject = async (payload: Partial<Project>): Promise<Project> => {
  const result = await ProjectModel.create(payload);
  return result;
};

const getAllProjects = async (): Promise<Project[]> => {
  const result = await ProjectModel.find();
  return result;
};

const getProjectById = async (id: string): Promise<Project | null> => {
  const result = await ProjectModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return result;
};

const updateProject = async (
  id: string,
  payload: Partial<Project>,
): Promise<Project | null> => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
  return result;
};

const deleteProject = async (id: string): Promise<void> => {
  const result = await ProjectModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
