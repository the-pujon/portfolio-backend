"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = require("express");
const education_controller_1 = require("./education.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const education_validation_1 = require("./education.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(education_validation_1.EducationValidation.createEducationZodSchema), education_controller_1.EducationController.createEducation);
router.get("/", education_controller_1.EducationController.getAllEducations);
router.get("/:id", education_controller_1.EducationController.getEducationById);
router.patch("/:id", (0, validateRequess_1.default)(education_validation_1.EducationValidation.updateEducationZodSchema), education_controller_1.EducationController.updateEducation);
router.delete("/:id", education_controller_1.EducationController.deleteEducation);
exports.EducationRoutes = router;
