import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.createProject(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getProjectById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.updateProject(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.deleteProject(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
