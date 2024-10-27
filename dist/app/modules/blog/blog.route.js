"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const blog_validation_1 = require("./blog.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(blog_validation_1.BlogValidation.createBlogZodSchema), blog_controller_1.BlogController.createBlog);
router.get("/", blog_controller_1.BlogController.getAllBlogs);
router.get("/:id", blog_controller_1.BlogController.getBlogById);
router.patch("/:id", (0, validateRequess_1.default)(blog_validation_1.BlogValidation.updateBlogZodSchema), blog_controller_1.BlogController.updateBlog);
router.delete("/:id", blog_controller_1.BlogController.deleteBlog);
// New route for adding feedback
router.post("/:id/feedback", (0, validateRequess_1.default)(blog_validation_1.BlogValidation.addFeedbackZodSchema), blog_controller_1.BlogController.addFeedback);
exports.BlogRoutes = router;
