import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CertificateService } from "./certificate.service";

const createCertificate = catchAsync(async (req: Request, res: Response) => {
  const { userId, ...certificateData } = req.body;
  const result = await CertificateService.createCertificate(
    certificateData,
    userId,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Certificate created successfully",
    data: result,
  });
});

const getAllCertificates = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.getAllCertificates();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Certificates retrieved successfully",
    data: result,
  });
});

const getCertificateById = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.getCertificateById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Certificate retrieved successfully",
    data: result,
  });
});

const updateCertificate = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificateService.updateCertificate(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Certificate updated successfully",
    data: result,
  });
});

const deleteCertificate = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.body;
  await CertificateService.deleteCertificate(req.params.id, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Certificate deleted successfully",
    data: null,
  });
});

export const CertificateController = {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
};
