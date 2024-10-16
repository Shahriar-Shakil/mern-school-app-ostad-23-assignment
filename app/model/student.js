import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, // URL or filename for the uploaded image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

studentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});
studentSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const Student = mongoose.model("Student", studentSchema);

export default Student;
