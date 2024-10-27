"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const skill_validation_1 = require("./skill.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(skill_validation_1.SkillValidation.createSkillZodSchema), skill_controller_1.SkillController.createSkill);
router.get("/", skill_controller_1.SkillController.getAllSkills);
router.get("/:id", skill_controller_1.SkillController.getSkillById);
router.patch("/:id", (0, validateRequess_1.default)(skill_validation_1.SkillValidation.updateSkillZodSchema), skill_controller_1.SkillController.updateSkill);
router.delete("/:id", skill_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
