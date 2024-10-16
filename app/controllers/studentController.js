import {
  CreateStudentProfileService,
  loginStudentService,
  ReadStudentProfileService,
  UpdateStudentProfileService,
  VerifyLoginService,
} from "../service/studentService.js";

export const Login = async (req, res) => {
  let result = await loginStudentService(req, res);
  return res.json(result);
};
export const VerifyLogin = async (req, res) => {
  try {
    const result = await VerifyLoginService(req.headers.token);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ status: "fail", message: "Server Error" });
  }
};
export const CreateStudentProfile = async (req, res) => {
  let result = await CreateStudentProfileService(req);
  return res.json(result);
};

export const UpdateStudentProfile = async (req, res) => {
  let result = await UpdateStudentProfileService(req);
  return res.json(result);
};

export const ReadStudentProfile = async (req, res) => {
  let result = await ReadStudentProfileService(req);
  return res.json(result);
};
