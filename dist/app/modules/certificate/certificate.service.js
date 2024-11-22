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
exports.CertificateService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const certificate_model_1 = __importDefault(require("./certificate.model"));
const profile_model_1 = __importDefault(require("../profile/profile.model"));
const createCertificate = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield certificate_model_1.default.create(payload);
    // Update profile
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (profile) {
        profile.certifications = [...(profile.certifications || []), result._id];
        yield profile.save();
    }
    return result;
});
const getAllCertificates = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield certificate_model_1.default.find();
    return result;
});
const getCertificateById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield certificate_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Certificate not found");
    }
    return result;
});
const updateCertificate = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield certificate_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Certificate not found");
    }
    return result;
});
const deleteCertificate = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield certificate_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Certificate not found");
    }
    // Update profile
    const profile = yield profile_model_1.default.findOne({ user: userId });
    if (profile) {
        profile.certifications = (_a = profile.certifications) === null || _a === void 0 ? void 0 : _a.filter((certId) => certId.toString() !== id);
        yield profile.save();
    }
});
exports.CertificateService = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificate,
    deleteCertificate,
};
