import { Router } from "express";
import { EducationController } from "./education.controller";
import validateRequest from "../../middlewares/validateRequess";
import { EducationValidation } from "./education.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(EducationValidation.createEducationZodSchema),
  EducationController.createEducation,
);
router.get("/", EducationController.getAllEducations);
router.get("/:id", EducationController.getEducationById);
router.patch(
  "/:id",
  validateRequest(EducationValidation.updateEducationZodSchema),
  EducationController.updateEducation,
);
router.delete("/:id", EducationController.deleteEducation);

export const EducationRoutes = router;
