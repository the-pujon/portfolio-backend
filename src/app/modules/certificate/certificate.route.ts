import { Router } from "express";
import { CertificateController } from "./certificate.controller";
import { CertificateValidation } from "./certificate.validation";
import validateRequest from "../../middlewares/validateRequess";

const router = Router();

router.post(
  "/create",
  validateRequest(CertificateValidation.createCertificateZodSchema),
  CertificateController.createCertificate,
);
router.get("/", CertificateController.getAllCertificates);
router.get("/:id", CertificateController.getCertificateById);
router.patch(
  "/:id",
  validateRequest(CertificateValidation.updateCertificateZodSchema),
  CertificateController.updateCertificate,
);
router.delete("/:id", CertificateController.deleteCertificate);

export const CertificateRoutes = router;
