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
exports.ProfileService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const profile_model_1 = __importDefault(require("./profile.model"));
const createProfile = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_model_1.default.create(payload);
    return result;
});
const getProfileById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_model_1.default.findOne({ user: id }).populate("skills");
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Profile not found");
    }
    return result;
});
const updateProfile = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("payload", payload);
    const result = yield profile_model_1.default.findOneAndUpdate({ user: id }, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Profile not found");
    }
    return result;
});
const deleteProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Profile not found");
    }
});
exports.ProfileService = {
    createProfile,
    getProfileById,
    updateProfile,
    deleteProfile,
};
