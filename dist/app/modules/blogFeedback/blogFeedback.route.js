"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFeedbackRoutes = void 0;
const express_1 = require("express");
const blogFeedback_controller_1 = require("./blogFeedback.controller");
const blogFeedback_validation_1 = require("./blogFeedback.validation");
const validateRequess_1 = __importDefault(require("./../../middlewares/validateRequess"));
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(blogFeedback_validation_1.BlogFeedbackValidation.createBlogFeedbackZodSchema), blogFeedback_controller_1.BlogFeedbackController.createBlogFeedback);
router.get("/", blogFeedback_controller_1.BlogFeedbackController.getAllBlogFeedbacks);
router.get("/blog/:blogId", blogFeedback_controller_1.BlogFeedbackController.getBlogFeedbacksByBlogId);
router.get("/:id", blogFeedback_controller_1.BlogFeedbackController.getBlogFeedbackById);
router.patch("/:id", (0, validateRequess_1.default)(blogFeedback_validation_1.BlogFeedbackValidation.updateBlogFeedbackZodSchema), blogFeedback_controller_1.BlogFeedbackController.updateBlogFeedback);
router.delete("/:id", blogFeedback_controller_1.BlogFeedbackController.deleteBlogFeedback);
exports.BlogFeedbackRoutes = router;
