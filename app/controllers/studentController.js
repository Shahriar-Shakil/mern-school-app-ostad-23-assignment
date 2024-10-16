import {
  CreateStudentProfileService,
  loginStudentService,
  ReadStudentProfileService,
  VerifyLoginService,
} from "../service/studentService.js";

export const Login = async (req, res) => {
  let result = await loginStudentService(req);
  return res.json(result);
};

export const VerifyLogin = async (req, res) => {
  let result = await VerifyLoginService(req);
  return res.json(result);
};

export const CreateStudentProfile = async (req, res) => {
  let result = await CreateStudentProfileService(req);
  return res.json(result);
};

export const UpdateStudentProfile = async (req, res) => {
  // let result = await UpdateUserProfileService(req);
  // return res.json(result);
};

export const ReadStudentProfile = async (req, res) => {
  let result = await ReadStudentProfileService(req);
  return res.json(result);
};
