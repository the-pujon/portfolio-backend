import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ExperienceService } from "./experience.service";

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const userId = req.body.userId; // Assuming userId is sent in the request body
  const result = await ExperienceService.createExperience(req.body, userId);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Experience created successfully",
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getAllExperiences();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experiences retrieved successfully",
    data: result,
  });
});

const getExperienceById = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getExperienceById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience retrieved successfully",
    data: result,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.updateExperience(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience updated successfully",
    data: result,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const userId = req.body.userId; // Assuming userId is sent in the request body
  const result = await ExperienceService.deleteExperience(
    req.params.id,
    userId,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience deleted successfully",
    data: result,
  });
});

const getProfileByUserId = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const result = await ExperienceService.getProfileByUserId(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
  getProfileByUserId, // Add this new controller method
};
