"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = require("express");
const profile_controller_1 = require("./profile.controller");
const profile_validation_1 = require("./profile.validation");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(profile_validation_1.ProfileValidation.createProfileZodSchema), profile_controller_1.ProfileController.createProfile);
router.get("/:id", profile_controller_1.ProfileController.getProfileById);
router.patch("/:id", (0, validateRequess_1.default)(profile_validation_1.ProfileValidation.updateProfileZodSchema), profile_controller_1.ProfileController.updateProfile);
router.delete("/:id", profile_controller_1.ProfileController.deleteProfile);
exports.ProfileRoutes = router;
