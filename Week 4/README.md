# Blog App Backend

## Week 4 Complete

A complete backend application for a **Blog Platform** built using **Node.js**, **Express.js**, and **MongoDB**.

This project demonstrates:

- Authentication
- Authorization
- Article management
- Protected routes
- Middleware integration
- REST API development
- Modular backend architecture

---

# Project Overview

This project is designed to build a secure and scalable backend for a Blog Application.

It includes:

- Express server setup
- MongoDB database integration using Mongoose
- User Authentication & Authorization
- JWT-based login system
- Password hashing using bcryptjs
- REST API creation
- CRUD operations for Articles
- Protected routes
- Middleware integration
- Error handling
- Role-based access
- Comment handling system
- Active/Inactive article management

---

# Technologies Used

The following technologies and packages are used in this project:

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- dotenv
- JWT (jsonwebtoken)
- Nodemon
- cors

---

# Project Structure

```bash
BLOG-APP-BACKEND/
│
├── APIs/
│   ├── admin-api.js
│   ├── author-api.js
│   ├── user-api.js
│   └── common-api.js
│
├── models/
│   ├── userModel.js
│   └── articleModel.js
│
├── middleware/
│   └── verifyToken.js
│
├── server.js
├── package.json
├── package-lock.json
├── req.http
├── .env
├── .gitignore
└── README.md
```

---

# Purpose of this Project

The purpose of this project is to create a complete backend system for a Blog Application where:

- Users can register and login
- Authors can create and manage articles
- Admins can manage users/articles
- Articles can be activated/deactivated
- Users can comment on articles
- Protected APIs are secured using JWT Authentication

---

# Concepts Covered

This project helps in understanding:

- Backend server architecture
- REST API development
- MongoDB database operations
- JWT Authentication
- Password encryption
- Middleware concepts
- Role-based authorization
- Modular backend structure
- CRUD operations
- Secure backend practices

---

# Features Implemented

---

## 1. Express Server Setup

### Features

- Created Express application
- Configured middleware
- Assigned port number
- Connected APIs

### Additional Setup Details

- Organized APIs using modular routing
- Configured middleware for request handling
- Connected backend routes with Express server

---

## 2. Environment Configuration

Created `.env` file for environment variables and sensitive configuration values.

### Example `.env`

```env
PORT=3000
DBURL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

### Purpose

- Store secret credentials securely
- Manage database connection URLs
- Configure application settings

---

## 3. Database Integration

Connected MongoDB using Mongoose and created schemas/models.

### User Schema: `UserSchema`

Fields included:

1. firstName
2. lastName
3. email (Unique)
4. password
5. role
6. profileImageUrl
7. isUserActive

### User Schema Purpose

- Store user details
- Handle authentication data
- Manage user roles and account status

---

### Article Schema: `ArticleSchema`

Fields included:

1. author
2. title
3. category
4. content
5. comments
6. isArticleActive

### Article Schema Purpose

- Store blog articles
- Manage article visibility
- Handle comments and content management

---

# Authentication System

Implemented secure authentication using JWT.

## Features

- User Registration
- User Login
- Logout System
- Token Generation
- Protected Routes
- Token Verification Middleware

---

## Authentication Workflow

1. User registers/login
2. JWT token is generated
3. Token is sent to the client
4. Protected routes verify the token
5. Authorized users gain access to secured APIs

---

# Password Security

Passwords are securely hashed using `bcryptjs` before storing in the database.

## Security Features

- Password encryption
- Secure password storage
- Authentication validation
- Protection against plain-text password storage

---

# APIs Implemented

---

## Common APIs

### Features

- Register API
- Login API
- Logout API
- Change Password

### Purpose

- Handle authentication
- Manage user sessions
- Maintain account security

---

## User APIs

### Features

- Read articles
- Add comments
- View active articles

### Purpose

- Allow users to interact with blog content
- Enable commenting functionality
- Provide access to published articles

---

## Author APIs

### Features

- Create own article
- Update own article
- Delete own article
- Restore own article
- Manage own articles

### Purpose

- Allow authors to manage blog content
- Handle article lifecycle management
- Control article visibility

---

## Admin APIs

### Features

- Manage users
- Manage articles
- Control active/inactive status

### Purpose

- Administrative control
- User management
- Content moderation

---

# Middleware Usage

Custom middleware is used for:

- Token verification
- Authentication handling
- Error handling
- Request validation

---

## Middleware Responsibilities

- Protect secured routes
- Verify JWT tokens
- Handle API errors
- Validate incoming requests
- Improve backend security

---

# CRUD Operations

Implemented complete CRUD functionality for:

- Users
- Articles

---

## CRUD Functionalities

### Create

- Create users
- Create articles
- Add comments

### Read

- Fetch articles
- Fetch users
- View active content

### Update

- Update articles
- Change passwords
- Modify account details

### Delete

- Delete articles
- Deactivate content
- Manage inactive records

---

# REST API Testing

API testing is done using:

- VS Code REST Client (`req.http`)

---

## API Testing Features

- Test API endpoints
- Send HTTP requests
- Verify API responses
- Debug backend APIs

---

# HTTP Methods Used

| Method | Purpose |
|--------|----------|
| GET | Fetch Data |
| POST | Create Data |
| PUT | Update Data |
| DELETE | Delete Data |

---

# HTTP Status Codes Used

| Status Code | Meaning |
|-------------|----------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Role-Based Access Control

The project implements role-based authorization.

## Roles Included

- User
- Author
- Admin

### Access Control

- Users can view articles and comment
- Authors can manage their own articles
- Admins can manage users and articles

---

# Learning Outcomes

This project helps in learning:

- Express.js backend development
- REST API architecture
- MongoDB integration
- JWT authentication
- Password hashing using bcryptjs
- Protected routes
- Middleware implementation
- CRUD operations
- Backend modular architecture
- Role-based authorization
- Error handling techniques

---

# Concepts Learned

This project demonstrates practical understanding of:

- Express server setup
- REST API development
- MongoDB integration using Mongoose
- Authentication systems
- JWT token handling
- Middleware implementation
- CRUD operations
- Backend folder structuring
- Secure backend practices
- Role-based access management

---

# Conclusion

This project serves as a complete backend application for a Blog Platform using:

- Node.js
- Express.js
- MongoDB

It demonstrates how to:

- Build REST APIs
- Implement authentication systems
- Secure backend routes
- Structure scalable backend applications
- Handle CRUD operations
- Manage users and articles
- Implement middleware
- Handle role-based authorization

This project is highly useful for beginners and intermediate learners who want to strengthen their backend development concepts and understand real-world backend application architecture.