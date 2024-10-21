import { Router } from "express";
import { ContactController } from "./contact.controller";
import validateRequest from "../../middlewares/validateRequess";
import { ContactValidation } from "./contact.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(ContactValidation.createContactZodSchema),
  ContactController.createContact,
);
router.get("/", ContactController.getAllContacts);
router.get("/:id", ContactController.getContactById);
router.delete("/:id", ContactController.deleteContact);

export const ContactRoutes = router;
