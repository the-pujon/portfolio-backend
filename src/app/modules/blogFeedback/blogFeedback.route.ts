import { Router } from "express";
import { BlogFeedbackController } from "./blogFeedback.controller";
import { BlogFeedbackValidation } from "./blogFeedback.validation";
import validateRequest from "./../../middlewares/validateRequess";

const router = Router();

router.post(
  "/create",
  validateRequest(BlogFeedbackValidation.createBlogFeedbackZodSchema),
  BlogFeedbackController.createBlogFeedback,
);
router.get("/", BlogFeedbackController.getAllBlogFeedbacks);
router.get("/blog/:blogId", BlogFeedbackController.getBlogFeedbacksByBlogId);
router.get("/:id", BlogFeedbackController.getBlogFeedbackById);
router.patch(
  "/:id",
  validateRequest(BlogFeedbackValidation.updateBlogFeedbackZodSchema),
  BlogFeedbackController.updateBlogFeedback,
);
router.delete("/:id", BlogFeedbackController.deleteBlogFeedback);

export const BlogFeedbackRoutes = router;
