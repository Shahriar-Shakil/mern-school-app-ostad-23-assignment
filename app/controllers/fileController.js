import { UploadFileService } from "../service/fileService.js";

export const UploadFile = async (req, res) => {
  let result = await UploadFileService(req);
  return res.json(result);
};
