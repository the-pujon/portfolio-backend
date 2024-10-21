import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { BlogFeedbackService } from "./blogFeedback.service";

const createBlogFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogFeedbackService.createBlogFeedback(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog Feedback created successfully",
    data: result,
  });
});

const getAllBlogFeedbacks = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogFeedbackService.getAllBlogFeedbacks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Feedbacks retrieved successfully",
    data: result,
  });
});

const getBlogFeedbackById = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogFeedbackService.getBlogFeedbackById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Feedback retrieved successfully",
    data: result,
  });
});

const getBlogFeedbacksByBlogId = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BlogFeedbackService.getBlogFeedbacksByBlogId(
      req.params.blogId,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Blog Feedbacks retrieved successfully",
      data: result,
    });
  },
);

const updateBlogFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogFeedbackService.updateBlogFeedback(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Feedback updated successfully",
    data: result,
  });
});

const deleteBlogFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogFeedbackService.deleteBlogFeedback(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Feedback deleted successfully",
    data: result,
  });
});

export const BlogFeedbackController = {
  createBlogFeedback,
  getAllBlogFeedbacks,
  getBlogFeedbackById,
  getBlogFeedbacksByBlogId,
  updateBlogFeedback,
  deleteBlogFeedback,
};
