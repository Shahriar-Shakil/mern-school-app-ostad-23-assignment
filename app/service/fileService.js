import fs from "fs";
import path from "path";

export const UploadFileService = async (req) => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return { status: "fail", message: "No file uploaded" };
    }

    // Get the uploaded file information
    const file = req.file;

    return {
      status: "success",
      message: "File uploaded successfully",
      data: {
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size,
      },
    };
  } catch (error) {
    return {
      status: "fail",
      message: "Something went wrong during file upload",
    };
  }
};

export const ReadFileService = async (req, res) => {
  try {
    // Get filename from request params
    const filename = req.params.filename;

    // Define the file path (assumes files are stored in 'uploads/' directory)
    const filePath = path.join(process.cwd(), "uploads", filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return { status: "fail", message: "File not found" };
    }

    // Send the file as a response
    return res.sendFile(filePath);
  } catch (error) {
    return { status: "fail", message: "Error reading file" };
  }
};
