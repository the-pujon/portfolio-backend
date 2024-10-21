import { Router } from "express";
import { ExperienceController } from "./experience.controller";
import validateRequest from "../../middlewares/validateRequess";
import { ExperienceValidation } from "./experience.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(ExperienceValidation.createExperienceZodSchema),
  ExperienceController.createExperience,
);
router.get("/", ExperienceController.getAllExperiences);
router.get("/:id", ExperienceController.getExperienceById);
router.patch(
  "/:id",
  validateRequest(ExperienceValidation.updateExperienceZodSchema),
  ExperienceController.updateExperience,
);
router.delete("/:id", ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
