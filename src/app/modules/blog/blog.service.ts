import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Blog } from "./blog.interface";
import BlogModel from "./blog.model";

const createBlog = async (payload: Partial<Blog>): Promise<Blog> => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogs = async (): Promise<Blog[]> => {
  //const result = await BlogModel.find().populate("feedback");
  const result = await BlogModel.find();
  return result;
};

const getBlogById = async (id: string): Promise<Blog | null> => {
  const result = await BlogModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return result;
};

const updateBlog = async (
  id: string,
  payload: Partial<Blog>,
): Promise<Blog | null> => {
  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return result;
};

const deleteBlog = async (id: string): Promise<void> => {
  const result = await BlogModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }
};

const addFeedback = async (
  id: string,
  feedbackData: Blog["feedback"],
): Promise<Blog | null> => {
  const blog = await BlogModel.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  }

  const result = await BlogModel.findByIdAndUpdate(
    id,
    { $push: { feedback: feedbackData } },
    { new: true, runValidators: true },
  );

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Failed to add feedback");
  }

  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  addFeedback,
};
