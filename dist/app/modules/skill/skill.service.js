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
exports.SkillService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const skill_model_1 = __importDefault(require("./skill.model"));
const profile_model_1 = __importDefault(require("../profile/profile.model"));
const createSkill = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.default.create(payload);
    // Update profile
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (profile) {
        profile.skills = [...(profile.skills || []), result._id];
        yield profile.save();
    }
    return result;
});
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.default.find();
    return result;
});
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Skill not found");
    }
    return result;
});
const updateSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Skill not found");
    }
    return result;
});
const deleteSkill = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield skill_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Skill not found");
    }
    // Update profile
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (profile) {
        profile.skills = (_a = profile.skills) === null || _a === void 0 ? void 0 : _a.filter(skillId => skillId.toString() !== id);
        yield profile.save();
    }
});
exports.SkillService = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill,
};
