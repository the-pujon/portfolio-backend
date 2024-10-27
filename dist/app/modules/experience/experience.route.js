"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const experience_validation_1 = require("./experience.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(experience_validation_1.ExperienceValidation.createExperienceZodSchema), experience_controller_1.ExperienceController.createExperience);
router.get("/", experience_controller_1.ExperienceController.getAllExperiences);
router.get("/:id", experience_controller_1.ExperienceController.getExperienceById);
router.patch("/:id", (0, validateRequess_1.default)(experience_validation_1.ExperienceValidation.updateExperienceZodSchema), experience_controller_1.ExperienceController.updateExperience);
router.delete("/:id", experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
