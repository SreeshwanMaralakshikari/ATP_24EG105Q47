# Blog App

A full-stack role-based Blog Application where users can register, log in, read articles, comment on posts, and manage content according to their role.

The project is built using the MERN Stack and follows a modular backend architecture with authentication, authorization, protected routes, image uploads, and role-based dashboards.

---

# Deployment Links

## Live Frontend Application
Frontend URL:  
https://blog-app-sreeshwan.vercel.app

---

## Live Backend Server
Backend URL:  
https://blog-app-sreeshwan.onrender.com

---

# Features

# Authentication & Authorization
- User Registration
- User Login
- Logout Functionality
- JWT Token Authentication
- Role-Based Access Control
- Persistent Authentication
- Protected Routes
- Unauthorized Access Handling
- Password Encryption using bcrypt
- Automatic Auth Verification on Refresh

---

# User Features
- View all active articles
- Open full article details
- Add comments to articles
- View author information
- Responsive UI experience

---

# Author Features
- Create new articles
- Edit existing articles
- Soft delete articles
- Restore deleted articles
- View only own articles
- Manage article content
- Dashboard-based article management

---

# Admin Features
- View all registered users
- Activate user accounts
- Deactivate user accounts
- User management dashboard
- Control platform access

---

# Article Features
- Create articles with title, category, and content
- Comment system
- Article timestamps
- Soft delete support
- Article activity status
- Author-based article ownership
- Article filtering by active status

---

# Profile Features
- Upload profile image
- Store images using Cloudinary
- User role display
- Profile-based access handling

---

# Backend Functionalities
- REST API Architecture
- Express Middleware Integration
- MongoDB Database Integration
- Mongoose Schema Validation
- Error Handling Middleware
- Async Route Handling
- Duplicate Data Validation
- Invalid Route Handlings
- Secure Password Storage
- Environment Variable Configuration

---

# Frontend Functionalities
- React Component Architecture
- Zustand State Management
- Form Handling with React Hook Form
- API Integration using Axios
- Toast Notifications
- Client-side Routing
- Protected Navigation
- Dynamic Dashboard Rendering
- Conditional UI Rendering
- Reusable Components
- Responsive Design

---

# Tech Stack

## Frontend
- React
- Vite
- React Router
- Zustand
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- dotenv
- cors

---

# Project Structure

```bash
Blog_App/
│
├── backend/
│   │
│   ├── APIs/
│   │   ├── adminApi.js
│   │   ├── authorApi.js
│   │   ├── userApi.js
│   │   └── userAuthorApi.js
│   │
│   ├── config/
│   │   └── cloudinaryConfig.js
│   │
│   ├── middlewares/
│   │   ├── verifyToken.js
│   │   ├── errorHandler.js
│   │   └── expressErrorHandler.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── articleModel.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    │
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── store/
    │   ├── routes/
    │   ├── assets/
    │   └── App.jsx
    │
    ├── public/
    ├── vite.config.js
    ├── package.json
    └── .env
```

---

# Database Schemas

## User Schema

```js
{
    firstName,
    lastName,
    email,
    password,
    role,
    profileImageUrl,
    isUserActive
}
```

---

## Article Schema

```js
{
    author,
    title,
    category,
    content,
    comments,
    isArticleActive
}
```

---

## Comment Schema

```js
{
    user,
    comment
}
```

---

# Prerequisites

Before running this project, install:

- Node.js
- npm
- MongoDB
- Git

Also create:
- MongoDB Database
- Cloudinary Account

---

# Authentication Flow

```text
Register User
      ↓
Login User
      ↓
Generate JWT Token
      ↓
Store Token in localStorage
      ↓
Verify Token using Middleware
      ↓
Allow Access to Protected Routes
```

---

# API Endpoints

# Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/users` | Register User |
| POST | `/auth/login` | Login User |
| GET | `/auth/logout` | Logout User |
| GET | `/auth/check-auth` | Verify Authentication |
| PUT | `/auth/password` | Change Password |

---

# User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user-api/articles` | Get Active Articles |
| PUT | `/user-api/article` | Add Comment |

---

# Author Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/author-api/articles` | Create Article |
| GET | `/author-api/articles` | Get Own Articles |
| PUT | `/author-api/article` | Edit Article |
| PATCH | `/author-api/article` | Delete / Restore Article |

---

# Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin-api/users` | Get Users |
| PATCH | `/admin-api/users/deactivate` | Deactivate User |
| PATCH | `/admin-api/users/activate` | Activate User |

---

# Middleware Used

## verifyToken Middleware
- Verifies JWT token
- Protects private routes

## Error Handling Middleware
- Handles server errors
- Handles validation errors
- Handles duplicate key errors

## Multer Middleware
- Handles image uploads

---

# Security Features

- JWT Authentication
- Password Hashing
- Protected API Routes
- Role Authorization
- Environment Variable Protection
- Input Validation
- Duplicate Email Prevention

---

# Frontend Pages

- Home
- Register
- Login
- Articles
- Article Details
- User Profile
- Author Profile
- Admin Profile
- Unauthorized
- Not Found Page

---

# State Management

The application uses Zustand for:
- Authentication State
- User Data
- Login Persistence
- Logout Handling

---

# Cloudinary Integration

Used for:
- Profile Image Uploads
- Image Storage
- Cloud Media Management

---

# Future Improvements

- Article Likes
- Bookmark System
- Search Functionality
- Pagination
- Rich Text Editor
- Email Verification
- Forgot Password
- OTP Authentication
- Dark Mode
- Article Categories Filter
- Admin Analytics Dashboard
- Real-Time Notifications

---

# Learning Concepts Covered

- MERN Stack Development
- REST APIs
- Authentication
- Authorization
- MongoDB Relationships
- Middleware
- Protected Routes
- State Management
- File Uploads
- Cloud Storage
- API Integration
- Full Stack Routing

---
