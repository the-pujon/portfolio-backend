"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoryRoutes = void 0;
const express_1 = require("express");
const projectCategory_controller_1 = require("./projectCategory.controller");
const projectCategory_validation_1 = require("./projectCategory.validation");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(projectCategory_validation_1.ProjectCategoryValidation.createProjectCategoryZodSchema), projectCategory_controller_1.ProjectCategoryController.createProjectCategory);
router.get("/", projectCategory_controller_1.ProjectCategoryController.getAllProjectCategories);
router.get("/:id", projectCategory_controller_1.ProjectCategoryController.getProjectCategoryById);
router.patch("/:id", (0, validateRequess_1.default)(projectCategory_validation_1.ProjectCategoryValidation.updateProjectCategoryZodSchema), projectCategory_controller_1.ProjectCategoryController.updateProjectCategory);
router.delete("/:id", projectCategory_controller_1.ProjectCategoryController.deleteProjectCategory);
exports.ProjectCategoryRoutes = router;
