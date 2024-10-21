import { Router } from "express";
import { SkillController } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequess";
import { SkillValidation } from "./skill.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(SkillValidation.createSkillZodSchema),
  SkillController.createSkill,
);
router.get("/", SkillController.getAllSkills);
router.get("/:id", SkillController.getSkillById);
router.patch(
  "/:id",
  validateRequest(SkillValidation.updateSkillZodSchema),
  SkillController.updateSkill,
);
router.delete("/:id", SkillController.deleteSkill);

export const SkillRoutes = router;
