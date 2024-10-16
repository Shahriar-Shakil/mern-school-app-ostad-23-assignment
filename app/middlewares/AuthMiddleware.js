import { TokenDecode } from "../utility/tokenUtility.js";

export default (req, res, next) => {
  let token = req.cookies.token;
  let decoded = TokenDecode(token);

  if (decoded === null) {
    res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    let email = decoded.email;
    let student_id = decoded.student_id;
    req.headers.email = email;
    req.headers.student_id = student_id;
    next();
  }
};
