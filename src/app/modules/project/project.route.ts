import { Router } from "express";
import { ProjectController } from "./project.controller";
import { ProjectValidation } from "./project.validation";
import validateRequest from "../../middlewares/validateRequess";

const router = Router();

router.post(
  "/create",
  validateRequest(ProjectValidation.createProjectZodSchema),
  ProjectController.createProject,
);
router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getProjectById);
router.patch(
  "/:id",
  validateRequest(ProjectValidation.updateProjectZodSchema),
  ProjectController.updateProject,
);
router.delete("/:id", ProjectController.deleteProject);
router.post(
  "/feedback",
  validateRequest(ProjectValidation.giveFeedbackZodSchema),
  ProjectController.giveFeedback,
);
//router.get("/featured", ProjectController.getFeaturedProjects);
router.get("/featured", ProjectController.getFeaturedProjectsByPriority);

export const ProjectRoutes = router;
