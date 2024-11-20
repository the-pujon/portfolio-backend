import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Project } from "./project.interface";
import ProjectModel from "./project.model";
import ProfileModel from "../profile/profile.model";

const createProject = async (
  payload: Partial<Project>,
  userId: string,
): Promise<Project> => {
  const result = await ProjectModel.create(payload);

  // Update the profile with the new project
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $push: { projects: result._id } },
    { new: true },
  );

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

const deleteProject = async (id: string, userId: string): Promise<void> => {
  const result = await ProjectModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  // Remove the project from the profile
  await ProfileModel.findOneAndUpdate(
    { user: userId },
    { $pull: { projects: id } },
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

const giveFeedback = async (
  projectId: string,
  feedbackData: {
    rating: number;
    email: string;
    feedback: string;
  },
): Promise<Project | null> => {
  const result = await ProjectModel.findByIdAndUpdate(
    projectId,
    { $push: { feedbacks: feedbackData } },
    { new: true, runValidators: true },
  );

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  return result;
};

const getFeaturedProjects = async (): Promise<Project[]> => {
  const result = await ProjectModel.find({ featured: true })
    .sort({ priority: 1 }) // Sort by priority in ascending order
    .limit(6); // Limit to top 6 projects
  return result;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getProfileByUserId,
  giveFeedback,
  getFeaturedProjects,
};
