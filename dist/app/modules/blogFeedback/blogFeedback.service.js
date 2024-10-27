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
exports.BlogFeedbackService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blogFeedback_model_1 = __importDefault(require("./blogFeedback.model"));
const blog_model_1 = __importDefault(require("../blog/blog.model"));
const createBlogFeedback = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.create(payload);
    yield blog_model_1.default.findByIdAndUpdate(payload.blog, {
        $push: { blogFeedback: result._id },
    });
    return result;
});
const getAllBlogFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.find().populate("blog");
    return result;
});
const getBlogFeedbackById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.findById(id).populate("blog");
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Feedback not found");
    }
    return result;
});
const getBlogFeedbacksByBlogId = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.find({ blog: blogId }).populate("blog");
    return result;
});
const updateBlogFeedback = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    }).populate("blog");
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Feedback not found");
    }
    return result;
});
const deleteBlogFeedback = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Blog Feedback not found");
    }
    yield blog_model_1.default.findByIdAndUpdate(result.blog, {
        $pull: { blogFeedback: id },
    });
});
exports.BlogFeedbackService = {
    createBlogFeedback,
    getAllBlogFeedbacks,
    getBlogFeedbackById,
    getBlogFeedbacksByBlogId,
    updateBlogFeedback,
    deleteBlogFeedback,
};
