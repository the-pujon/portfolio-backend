import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProjectCategoryService } from "./projectCategory.service";

const createProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectCategoryService.createProjectCategory(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Project Category created successfully",
      data: result,
    });
  },
);

const getAllProjectCategories = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectCategoryService.getAllProjectCategories();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Categories retrieved successfully",
      data: result,
    });
  },
);

const getProjectCategoryById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectCategoryService.getProjectCategoryById(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Category retrieved successfully",
      data: result,
    });
  },
);

const updateProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectCategoryService.updateProjectCategory(
      req.params.id,
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Category updated successfully",
      data: result,
    });
  },
);

const deleteProjectCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProjectCategoryService.deleteProjectCategory(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project Category deleted successfully",
      data: result,
    });
  },
);

export const ProjectCategoryController = {
  createProjectCategory,
  getAllProjectCategories,
  getProjectCategoryById,
  updateProjectCategory,
  deleteProjectCategory,
};
