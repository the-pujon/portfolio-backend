import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProfileService } from "./profile.service";

const createProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.createProfile(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Profile created successfully",
    data: result,
  });
});

const getProfileById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.getProfileById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  console.log("req.body", req.body);

  const result = await ProfileService.updateProfile(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});

const deleteProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.deleteProfile(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile deleted successfully",
    data: result,
  });
});

const getAllProfiles = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.getAllProfiles();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profiles retrieved successfully",
    data: result,
  });
});

export const ProfileController = {
  createProfile,
  getProfileById,
  updateProfile,
  deleteProfile,
  getAllProfiles,
};
