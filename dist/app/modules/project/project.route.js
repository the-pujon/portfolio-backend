"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const project_validation_1 = require("./project.validation");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(project_validation_1.ProjectValidation.createProjectZodSchema), project_controller_1.ProjectController.createProject);
router.get("/", project_controller_1.ProjectController.getAllProjects);
router.get("/:id", project_controller_1.ProjectController.getProjectById);
router.patch("/:id", (0, validateRequess_1.default)(project_validation_1.ProjectValidation.updateProjectZodSchema), project_controller_1.ProjectController.updateProject);
router.delete("/:id", project_controller_1.ProjectController.deleteProject);
exports.ProjectRoutes = router;
