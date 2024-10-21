import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { BlogFeedback } from "./blogFeedback.interface";
import BlogFeedbackModel from "./blogFeedback.model";
import BlogModel from "../blog/blog.model";

const createBlogFeedback = async (
  payload: Partial<BlogFeedback>,
): Promise<BlogFeedback> => {
  const result = await BlogFeedbackModel.create(payload);
  await BlogModel.findByIdAndUpdate(payload.blog, {
    $push: { blogFeedback: result._id },
  });
  return result;
};

const getAllBlogFeedbacks = async (): Promise<BlogFeedback[]> => {
  const result = await BlogFeedbackModel.find().populate("blog");
  return result;
};

const getBlogFeedbackById = async (
  id: string,
): Promise<BlogFeedback | null> => {
  const result = await BlogFeedbackModel.findById(id).populate("blog");
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Feedback not found");
  }
  return result;
};

const getBlogFeedbacksByBlogId = async (
  blogId: string,
): Promise<BlogFeedback[]> => {
  const result = await BlogFeedbackModel.find({ blog: blogId }).populate(
    "blog",
  );
  return result;
};

const updateBlogFeedback = async (
  id: string,
  payload: Partial<BlogFeedback>,
): Promise<BlogFeedback | null> => {
  const result = await BlogFeedbackModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate("blog");
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Feedback not found");
  }
  return result;
};

const deleteBlogFeedback = async (id: string): Promise<void> => {
  const result = await BlogFeedbackModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog Feedback not found");
  }
  await BlogModel.findByIdAndUpdate(result.blog, {
    $pull: { blogFeedback: id },
  });
};

export const BlogFeedbackService = {
  createBlogFeedback,
  getAllBlogFeedbacks,
  getBlogFeedbackById,
  getBlogFeedbacksByBlogId,
  updateBlogFeedback,
  deleteBlogFeedback,
};
