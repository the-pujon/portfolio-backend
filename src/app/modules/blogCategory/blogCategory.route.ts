import { Router } from "express";
import { BlogCategoryController } from "./blogCategory.controller";
import validateRequest from "../../middlewares/validateRequess";
import { BlogCategoryValidation } from "./blogCategory.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(BlogCategoryValidation.createBlogCategoryZodSchema),
  BlogCategoryController.createBlogCategory,
);
router.get("/", BlogCategoryController.getAllBlogCategories);
router.get("/:id", BlogCategoryController.getBlogCategoryById);
router.patch(
  "/:id",
  validateRequest(BlogCategoryValidation.updateBlogCategoryZodSchema),
  BlogCategoryController.updateBlogCategory,
);
router.delete("/:id", BlogCategoryController.deleteBlogCategory);

export const BlogCategoryRoutes = router;
