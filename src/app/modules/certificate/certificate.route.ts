import { Router } from "express";
import { CertificateController } from "./certificate.controller";
import { CertificateValidation } from "./certificate.validation";
import validateRequest from "../../middlewares/validateRequess";
import { authorization } from "../../middlewares/authorization";

const router = Router();

router.post(
  "/create",
  authorization("user"),
  validateRequest(CertificateValidation.createCertificateZodSchema),
  CertificateController.createCertificate,
);
router.get("/", CertificateController.getAllCertificates);
router.get("/:id", CertificateController.getCertificateById);
router.patch(
  "/:id",
  validateRequest(CertificateValidation.updateCertificateZodSchema),
  authorization("user"),
  CertificateController.updateCertificate,
);
router.delete(
  "/:id",
  authorization("user"),
  CertificateController.deleteCertificate,
);



export const CertificateRoutes = router;
