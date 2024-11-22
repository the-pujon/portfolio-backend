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
exports.ProjectService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const project_model_1 = __importDefault(require("./project.model"));
const profile_model_1 = __importDefault(require("../profile/profile.model"));
const createProject = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.create(payload);
    // Update the profile with the new project
    yield profile_model_1.default.findOneAndUpdate({ user: userId }, { $push: { projects: result._id } }, { new: true });
    return result;
});
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.find();
    return result;
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    return result;
});
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    return result;
});
const deleteProject = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    // Remove the project from the profile
    yield profile_model_1.default.findOneAndUpdate({ user: userId }, { $pull: { projects: id } }, { new: true });
});
const getProfileByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (!profile) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Profile not found");
    }
    return profile;
});
const giveFeedback = (projectId, feedbackData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.findByIdAndUpdate(projectId, { $push: { feedbacks: feedbackData } }, { new: true, runValidators: true });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Project not found");
    }
    return result;
});
//const getFeaturedProjects = async (): Promise<Project[]> => {
//  const result = await ProjectModel.find({ featured: true })
//    .sort({ priority: 1 }) // Sort by priority in ascending order
//    .limit(6); // Limit to top 6 projects
//  return result;
//};
const getFeaturedProjectsByPriority = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.default.find({
        featured: true,
        priority: { $gte: 1, $lte: 6 },
    }).sort({ priority: 1 }); // Sort by priority in ascending order
    return result;
});
exports.ProjectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getProfileByUserId,
    giveFeedback,
    //getFeaturedProjects,
    getFeaturedProjectsByPriority,
};
