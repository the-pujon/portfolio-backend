import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { BlogCategory } from "./blogCategory.interface";
import BlogCategoryModel from "./blogCategory.model";

const createBlogCategory = async (
  payload: Partial<BlogCategory>,
): Promise<BlogCategory> => {
  const result = await BlogCategoryModel.create(payload);
  return result;
};

const getAllBlogCategories = async (): Promise<BlogCategory[]> => {
  const result = await BlogCategoryModel.find();
  return result;
};

const getBlogCategoryById = async (
  id: string,
): Promise<BlogCategory | null> => {
  const result = await BlogCategoryModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Category not found");
  }
  return result;
};

const updateBlogCategory = async (
  id: string,
  payload: Partial<BlogCategory>,
): Promise<BlogCategory | null> => {
  const result = await BlogCategoryModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Category not found");
  }
  return result;
};

const deleteBlogCategory = async (id: string): Promise<void> => {
  const result = await BlogCategoryModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Category not found");
  }
};

export const BlogCategoryService = {
  createBlogCategory,
  getAllBlogCategories,
  getBlogCategoryById,
  updateBlogCategory,
  deleteBlogCategory,
};
