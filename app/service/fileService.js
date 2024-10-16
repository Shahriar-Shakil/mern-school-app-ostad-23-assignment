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
