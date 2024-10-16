import express from "express";
import * as StudentController from "../app/controllers/studentController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/login", StudentController.Login);
router.post("/VerifyLogin", StudentController.VerifyLogin);
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

export default router;
