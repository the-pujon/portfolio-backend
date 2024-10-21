import { Router } from "express";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequess";
import { BlogValidation } from "./blog.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(BlogValidation.createBlogZodSchema),
  BlogController.createBlog,
);
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);
router.patch(
  "/:id",
  validateRequest(BlogValidation.updateBlogZodSchema),
  BlogController.updateBlog,
);
router.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = router;
