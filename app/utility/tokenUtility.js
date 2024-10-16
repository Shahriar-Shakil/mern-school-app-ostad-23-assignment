import jwt from "jsonwebtoken";
import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js";

export const TokenEncode = (email, student_id) => {
  const KEY = JWT_KEY;
  const EXPIRE = { expiresIn: JWT_EXPIRE_TIME };
  const PAYLOAD = { email: email, student_id: student_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const TokenDecode = (token) => {
  try {
    return jwt.verify(token, JWT_KEY);
  } catch (e) {
    return null;
  }
};
