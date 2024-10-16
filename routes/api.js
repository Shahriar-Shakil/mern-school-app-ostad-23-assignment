import express from "express";
import * as FileController from "../app/controllers/fileController.js";
import * as StudentController from "../app/controllers/studentController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import upload from "../app/utility/multerUtility.js"; // Import the multer utility

const router = express.Router();

router.post("/login", StudentController.Login);
router.post("/register", StudentController.CreateStudentProfile);
router.post(
  "/updateStudentProfile",
  AuthMiddleware,
  StudentController.UpdateStudentProfile
);
router.get(
  "/readStudentProfile",
  AuthMiddleware,
  StudentController.ReadStudentProfile
);

// file upload api
// File Upload API
router.post(
  "/uploadFile",
  AuthMiddleware,
  upload.single("file"), // Single file upload
  FileController.UploadFile
);
export default router;
