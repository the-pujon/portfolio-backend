import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { EducationService } from "./education.service";

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const { userId, ...educationData } = req.body;
  const result = await EducationService.createEducation(educationData, userId);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Education created successfully",
    data: result,
  });
});

const getAllEducations = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.getAllEducations();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Educations retrieved successfully",
    data: result,
  });
});

const getEducationById = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.getEducationById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education retrieved successfully",
    data: result,
  });
});

const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.updateEducation(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education updated successfully",
    data: result,
  });
});

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.body;
  const result = await EducationService.deleteEducation(req.params.id, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education deleted successfully",
    data: result,
  });
});

export const EducationController = {
  createEducation,
  getAllEducations,
  getEducationById,
  updateEducation,
  deleteEducation,
};
