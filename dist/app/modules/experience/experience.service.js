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
exports.ExperienceService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const experience_model_1 = __importDefault(require("./experience.model"));
const profile_model_1 = __importDefault(require("../profile/profile.model"));
const createExperience = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.default.create(payload);
    // Update profile
    yield profile_model_1.default.findOneAndUpdate({ user: userId }, { $push: { experiences: result._id } }, { new: true });
    return result;
});
const getAllExperiences = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.default.find();
    return result;
});
const getExperienceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Experience not found");
    }
    return result;
});
const updateExperience = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Experience not found");
    }
    return result;
});
const deleteExperience = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield experience_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Experience not found");
    }
    // Update profile
    yield profile_model_1.default.findOneAndUpdate({ user: userId }, { $pull: { experiences: id } }, { new: true });
});
const getProfileByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (!profile) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Profile not found");
    }
    return profile;
});
exports.ExperienceService = {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience,
    getProfileByUserId,
};
