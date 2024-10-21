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
exports.ContactService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const contact_model_1 = __importDefault(require("./contact.model"));
const createContact = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.default.create(payload);
    return result;
});
const getAllContacts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.default.find();
    return result;
});
const getContactById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.default.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Contact not found");
    }
    return result;
});
const deleteContact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Contact not found");
    }
});
exports.ContactService = {
    createContact,
    getAllContacts,
    getContactById,
    deleteContact,
};
