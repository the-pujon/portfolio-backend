"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryRoutes = void 0;
const express_1 = require("express");
const blogCategory_controller_1 = require("./blogCategory.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const blogCategory_validation_1 = require("./blogCategory.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(blogCategory_validation_1.BlogCategoryValidation.createBlogCategoryZodSchema), blogCategory_controller_1.BlogCategoryController.createBlogCategory);
router.get("/", blogCategory_controller_1.BlogCategoryController.getAllBlogCategories);
router.get("/:id", blogCategory_controller_1.BlogCategoryController.getBlogCategoryById);
router.patch("/:id", (0, validateRequess_1.default)(blogCategory_validation_1.BlogCategoryValidation.updateBlogCategoryZodSchema), blogCategory_controller_1.BlogCategoryController.updateBlogCategory);
router.delete("/:id", blogCategory_controller_1.BlogCategoryController.deleteBlogCategory);
exports.BlogCategoryRoutes = router;
