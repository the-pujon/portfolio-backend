import { Router } from "express";
import { ProjectCategoryController } from "./projectCategory.controller";
import { ProjectCategoryValidation } from "./projectCategory.validation";
import validateRequest from "../../middlewares/validateRequess";

const router = Router();

router.post(
  "/create",
  validateRequest(ProjectCategoryValidation.createProjectCategoryZodSchema),
  ProjectCategoryController.createProjectCategory,
);
router.get("/", ProjectCategoryController.getAllProjectCategories);
router.get("/:id", ProjectCategoryController.getProjectCategoryById);
router.patch(
  "/:id",
  validateRequest(ProjectCategoryValidation.updateProjectCategoryZodSchema),
  ProjectCategoryController.updateProjectCategory,
);
router.delete("/:id", ProjectCategoryController.deleteProjectCategory);

export const ProjectCategoryRoutes = router;
