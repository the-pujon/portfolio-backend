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
exports.BlogFeedbackController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const blogFeedback_service_1 = require("./blogFeedback.service");
const createBlogFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.createBlogFeedback(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Blog Feedback created successfully",
        data: result,
    });
}));
const getAllBlogFeedbacks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.getAllBlogFeedbacks();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog Feedbacks retrieved successfully",
        data: result,
    });
}));
const getBlogFeedbackById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.getBlogFeedbackById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog Feedback retrieved successfully",
        data: result,
    });
}));
const getBlogFeedbacksByBlogId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.getBlogFeedbacksByBlogId(req.params.blogId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog Feedbacks retrieved successfully",
        data: result,
    });
}));
const updateBlogFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.updateBlogFeedback(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog Feedback updated successfully",
        data: result,
    });
}));
const deleteBlogFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogFeedback_service_1.BlogFeedbackService.deleteBlogFeedback(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Blog Feedback deleted successfully",
        data: result,
    });
}));
exports.BlogFeedbackController = {
    createBlogFeedback,
    getAllBlogFeedbacks,
    getBlogFeedbackById,
    getBlogFeedbacksByBlogId,
    updateBlogFeedback,
    deleteBlogFeedback,
};
