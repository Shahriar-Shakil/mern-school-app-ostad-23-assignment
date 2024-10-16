import {
  DeleteFileService,
  ReadFileService,
  UploadFileService,
} from "../service/fileService.js";

export const UploadFile = async (req, res) => {
  let result = await UploadFileService(req);
  return res.json(result);
};
export const ReadFile = async (req, res) => {
  try {
    // Call the service directly, no need to expect a result
    await ReadFileService(req, res);
  } catch (error) {
    // Handle any errors from the service or unexpected errors
    console.error("Error in ReadFile controller:", error);
    return res.status(500).json({ status: "fail", message: "Server Error" });
  }
};
export const DeleteFile = async (req, res) => {
  try {
    // Call the DeleteFileService to handle the file deletion
    const result = await DeleteFileService(req);

    // Return the result based on the service response
    if (result.status === "fail") {
      return res.status(404).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    // Catch and log any errors
    console.error("Error in DeleteFile controller:", error);
    return res.status(500).json({ status: "fail", message: "Server Error" });
  }
};
