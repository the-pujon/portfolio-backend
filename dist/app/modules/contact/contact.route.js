"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const contact_controller_1 = require("./contact.controller");
const validateRequess_1 = __importDefault(require("../../middlewares/validateRequess"));
const contact_validation_1 = require("./contact.validation");
const router = (0, express_1.Router)();
router.post("/create", (0, validateRequess_1.default)(contact_validation_1.ContactValidation.createContactZodSchema), contact_controller_1.ContactController.createContact);
router.get("/", contact_controller_1.ContactController.getAllContacts);
router.get("/:id", contact_controller_1.ContactController.getContactById);
router.delete("/:id", contact_controller_1.ContactController.deleteContact);
exports.ContactRoutes = router;
