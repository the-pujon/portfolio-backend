import { Router } from "express";
import { ProfileController } from "./profile.controller";
import { ProfileValidation } from "./profile.validation";
import validateRequest from "../../middlewares/validateRequess";

const router = Router();

router.post(
  "/create",
  validateRequest(ProfileValidation.createProfileZodSchema),
  ProfileController.createProfile,
);
router.get("/", ProfileController.getAllProfiles);
router.get("/:id", ProfileController.getProfileById);
router.patch(
  "/:id",
  validateRequest(ProfileValidation.updateProfileZodSchema),
  ProfileController.updateProfile,
);
router.delete("/:id", ProfileController.deleteProfile);

export const ProfileRoutes = router;
