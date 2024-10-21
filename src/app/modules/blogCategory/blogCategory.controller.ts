import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { BlogCategoryService } from "./blogCategory.service";

const createBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.createBlogCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog Category created successfully",
    data: result,
  });
});

const getAllBlogCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.getAllBlogCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Categories retrieved successfully",
    data: result,
  });
});

const getBlogCategoryById = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.getBlogCategoryById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Category retrieved successfully",
    data: result,
  });
});

const updateBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.updateBlogCategory(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Category updated successfully",
    data: result,
  });
});

const deleteBlogCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogCategoryService.deleteBlogCategory(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog Category deleted successfully",
    data: result,
  });
});

export const BlogCategoryController = {
  createBlogCategory,
  getAllBlogCategories,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
};
