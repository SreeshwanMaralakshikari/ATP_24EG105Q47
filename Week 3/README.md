# Backend Application

## Week 3 Complete

A backend application built using **Node.js**, **Express.js**, and **MongoDB** that demonstrates REST API development, CRUD operations, authentication, middleware usage, and database integration.

---

# Project Overview

This project is designed to demonstrate the fundamentals and intermediate concepts of backend development using **Express.js** and **MongoDB**.

It includes:

- Express server setup
- MongoDB database connection using Mongoose
- REST API creation
- CRUD operations
- Route handling
- Authentication and authorization
- Middleware integration
- Password hashing using bcryptjs
- Protected and public routes
- Error handling and status codes

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- Nodemon
- JWT (JSON Web Tokens)

---

# Project Structure

```bash
BackEnd-2/
│
├── APIs/
│   └── User API routes
│
├── auth/
│   └── Authentication utilities
│
├── controllers/
│   └── Business logic/controllers
│
├── middleware/
│   └── Authentication & error middleware
│
├── models/
│   └── Mongoose schemas/models
│
├── server.js
├── package.json
├── package-lock.json
├── req.http
├── README.md
└── .gitignore
```

---

# Purpose of this Project

The purpose of this project is to build a structured backend application using **Express.js** and **MongoDB** while implementing authentication and secure REST APIs.

This project helps in understanding:

- Backend server architecture
- REST API development
- MongoDB integration using Mongoose
- CRUD operations
- Authentication systems
- Middleware implementation
- Password encryption
- Protected routing
- Proper status code handling
- Modular backend folder structure

---

# Features Implemented

---

## 1. Express Server Setup

### Features

- Creation of Express application
- Middleware configuration
- API route handling

### Additional Implementation Details

- Configured Express middleware
- Organized API routes using modular structure
- Handled incoming requests and responses properly

---

## 2. MongoDB Integration

### Features

- Connected MongoDB using Mongoose
- Created schemas and models
- Performed database operations

### Database Functionalities

- Database connection using Mongoose
- Schema creation
- Data storage and retrieval
- Collection management

---

## 3. CRUD Operations

Implemented complete CRUD operations for users.

### CRUD Functionalities

- Create user data
- Read user data
- Update user data
- Delete user data

---

## 4. Authentication System

Implemented login authentication using JWT.

### Features Include

- User login
- Token generation
- Protected routes
- Route verification middleware

### Authentication Workflow

1. User logs in
2. JWT token is generated
3. Token is sent to the client
4. Protected routes verify the token
5. Authorized users can access protected resources

---

## 5. Password Security

Passwords are securely hashed using **bcryptjs** before storing in the database.

### Security Features

- Password encryption
- Secure password storage
- Authentication validation

---

## 6. Middleware Usage

Custom middleware is used for:

- Authentication verification
- Error handling
- Request validation

### Middleware Responsibilities

- Protect secured routes
- Handle invalid requests
- Verify JWT tokens
- Improve API security

---

# REST API Development

This project demonstrates REST API development using Express.js.

### HTTP Methods Used

| Method | Purpose |
|--------|----------|
| GET | Fetch Data |
| POST | Create Data |
| PUT | Update Data |
| DELETE | Delete Data |

---

# Authentication & Authorization

Authentication and authorization are implemented using JWT (JSON Web Tokens).

### Features

- Secure login system
- Token-based authentication
- Protected API access
- Route verification

---

# Error Handling

Proper error handling and status code handling are implemented throughout the application.

### Common HTTP Status Codes Used

| Status Code | Meaning |
|-------------|----------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Environment Variables

The project uses a `.env` file for managing environment variables.

### Example `.env`

```env
PORT=3000
DBURL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

---

# API Testing

API testing is performed using the VS Code REST Client extension with the `req.http` file.

### API Testing Features

- Test API endpoints
- Send HTTP requests
- Verify responses
- Debug backend APIs

---

# Learning Outcomes

This project helps in learning:

- Express.js backend development
- REST API architecture
- MongoDB database operations
- Authentication using JWT
- Password hashing with bcryptjs
- Middleware concepts
- Error handling
- Backend project structuring

---

# Concepts Covered

This project covers:

- Backend server architecture
- REST API creation
- MongoDB integration using Mongoose
- CRUD operations
- Authentication systems
- Middleware implementation
- Password security
- Protected routing
- Error handling techniques
- Modular backend architecture

---

# Conclusion

This project serves as a complete backend development practice project using:

- Node.js
- Express.js
- MongoDB

It demonstrates how to:

- Build REST APIs
- Handle authentication
- Secure backend routes
- Structure backend applications
- Connect MongoDB databases
- Implement middleware
- Handle CRUD operations

This project is useful for beginners and intermediate learners who want to strengthen their backend development concepts and understand real-world backend application structure.
