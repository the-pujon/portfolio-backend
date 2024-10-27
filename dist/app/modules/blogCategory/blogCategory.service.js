"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blogCategory_model_1 = __importDefault(require("./blogCategory.model"));
const createBlogCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.create(payload);
    return result;
});
const getAllBlogCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.find();
    return result;
});
const getBlogCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Category not found");
    }
    return result;
});
const updateBlogCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Category not found");
    }
    return result;
});
const deleteBlogCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogCategory_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Category not found");
    }
});
exports.BlogCategoryService = {
    createBlogCategory,
    getAllBlogCategories,
    getBlogCategoryById,
    updateBlogCategory,
    deleteBlogCategory,
};
