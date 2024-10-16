# Student Registration API

This is a simple Node.js-based backend API for managing student registration, authentication, profile management, file upload, and file management. The application uses **Express.js** and **MongoDB** as the database and provides JSON Web Token (JWT) authentication.

## Features

1. **Student Registration**: Create new student profiles.
2. **Student Login**: Authenticate students with email and password.
3. **JWT Authentication**: Secured endpoints using JWT-based authentication.
4. **Profile Read**: Retrieve the profile information of a student.
5. **Profile Update**: Modify a student's profile.
6. **File Upload**: Upload files using **Multer**.
7. **File Read**: Read and download uploaded files.
8. **File Delete**: Delete a single file.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database.
- **JWT (JsonWebToken)**: For secure authentication.
- **Multer**: Middleware for handling multipart/form-data, used for file uploads.
- **bcrypt.js**: For password hashing.
- **dotenv**: To manage environment variables.
- **Postman**: For API testing.

## Installation

1. Clone the repository

   \```bash
   git clone https://github.com/Shahriar-Shakil/mern-school-app-ostad-23-assignment.git
   \```

2. Navigate to the project directory

   \```bash
   cd mern-school-app-ostad-23-assignment
   \```

3. Install the dependencies

   \```bash
   npm install
   \```

4. Set up your environment variables in a `.env` file

   \```bash
   touch .env
   \```

   Change the DATABASE Variable from app/config/config.js

5. Start the server

   \```bash
   npm start
   \```

6. The server will run on `http://localhost:5050`

## API Endpoints

### Authentication Routes

- **POST** `/register` - Register a new student (JWT required).
- **POST** `/login` - Login as a student.

### Profile Routes

- **GET** `/readStudentProfile` - Get student profile (JWT required).
- **POST** `/updateStudentProfile` - Update student profile (JWT required).

### File Management Routes

- **POST** `/uploadFile` - Upload a file (JWT required).
- **GET** `/readFile/:filename` - Read or download a file by filename (JWT required).
- **DELETE** `/deleteFile/:filename` - Delete a file by filename (JWT required).

## Running the API via Postman

- For authentication, pass the JWT token in the header as a `token` key.
- Use `Content-Type: multipart/form-data` for file upload requests.

### Sample Registration Data

\```json
{
"name": "John Doe",
"email": "johndoe@example.com",
"password": "password123"
}
\```

### Sample Login Data

\```json
{
"email": "johndoe@example.com",
"password": "password123"
}
\```

## Folder Structure

\```bash
student-registration-api/
│
├── app/
│ ├── controllers/
│ │ └── studentController.js
│ ├── middlewares/
│ │ └── AuthMiddleware.js
│ └── service/
│ ├── studentService.js
│ ├── FileService.js
│
├── config/
│ └── config.js
├── model/
│ └── student.js
├── uploads/ # Directory to store uploaded files
├── utility/
│ ├── tokenUtility.js
│ └── multerUtility.js
├── .env # Environment variables
├── .gitignore
├── package.json
└── server.js
\```

## Error Handling

- For all authenticated routes, if an invalid or expired token is provided, a `401 Unauthorized` response will be returned.
- If the file is not found or cannot be deleted, a `404 Not Found` response will be returned.

## Future Improvements

- Add validation for inputs using a library like `Joi` or `express-validator`.
- Implement role-based access control.
- Add unit tests for the API.

## License

This project is open-source and available under the MIT License.
