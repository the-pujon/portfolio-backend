"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateRoutes = void 0;
const express_1 = require("express");
const certificate_controller_1 = require("./certificate.controller");
const certificate_validation_1 = require("./certificate.validation");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const authorization_1 = require("../../middlewares/authorization");
const router = (0, express_1.Router)();
router.post("/create", (0, authorization_1.authorization)("user"), (0, validateRequess_1.default)(certificate_validation_1.CertificateValidation.createCertificateZodSchema), certificate_controller_1.CertificateController.createCertificate);
router.get("/", certificate_controller_1.CertificateController.getAllCertificates);
router.get("/:id", certificate_controller_1.CertificateController.getCertificateById);
router.patch("/:id", (0, validateRequess_1.default)(certificate_validation_1.CertificateValidation.updateCertificateZodSchema), (0, authorization_1.authorization)("user"), certificate_controller_1.CertificateController.updateCertificate);
router.delete("/:id", (0, authorization_1.authorization)("user"), certificate_controller_1.CertificateController.deleteCertificate);
exports.CertificateRoutes = router;
