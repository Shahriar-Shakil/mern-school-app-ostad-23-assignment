import bcrypt from "bcrypt";
import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";
import Student from "../model/student.js";
import { TokenDecode, TokenEncode } from "../utility/tokenUtility.js";

export const loginStudentService = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the student by email
    const student = await Student.findOne({ email });
    if (!student) {
      return { success: false, message: "Invalid email or password" };
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return { success: false, message: "Invalid email or password" };
    }

    // Generate JWT token
    const token = TokenEncode(student.email, student._id);

    const expiresIn = JWT_EXPIRE_TIME * 1000; // Convert seconds to milliseconds

    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "production", // Use true in production
      maxAge: expiresIn, // Set cookie expiration time to match token expiration
    }); // Set the cookie
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: "An error occurred during login" };
  }
};
export const VerifyLoginService = (token) => {
  try {
    const decoded = TokenDecode(token);

    if (!decoded) {
      return { status: "fail", message: "Invalid token" };
    }

    // If token is valid, return the decoded data
    return {
      status: "success",
      message: "Token is valid",
      data: decoded,
    };
  } catch (error) {
    return { status: "fail", message: "Error verifying token" };
  }
};
export const CreateStudentProfileService = async (req) => {
  try {
    const { name, email, password, profilePicture } = req.body;

    // Check if the email already exists
    let student = await Student.findOne({ email });
    if (student) {
      return { success: false, message: "Email is already registered" };
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student
    student = new Student({
      name,
      email,
      password: hashedPassword,
      profilePicture,
    });

    // Save the student to the database
    await student.save();

    return { success: true, message: "Student registered successfully" };
  } catch (error) {
    console.error("Error registering student:", error);
    return { success: false, message: "An error occurred during registration" };
  }
};
export const UpdateStudentProfileService = async (req) => {
  try {
    let student_id = req.headers.student_id;
    let reqBody = req.body;
    reqBody.student_id = student_id;
    await Student.updateOne(
      { _id: student_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", message: "Student Save Success" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

export const ReadStudentProfileService = async (req) => {
  try {
    let student_id = req.headers.student_id;
    let data = await Student.findOne({ _id: student_id });
    return { status: "success", message: "Student Read Success", data: data };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};
