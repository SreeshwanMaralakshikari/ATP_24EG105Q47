
# MERN Mini Employee App Backend

A full-stack Employee Management Application built using the **MERN Stack**.

# Deployment Links

## Live Backend Server
⚙️ Backend URL:  
https://mini-employee-app-sreeshwan.onrender.com

---
This project allows users to:

* Create Employees
* View Employees
* Edit Employee Details
* Delete Employees
* Manage employee records using MongoDB
* Work with React Router, Context API, Zustand, Axios, and TailwindCSS

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS
* Cookie Parser

---

# Project Structure

```bash
Mern-Mini-Employee-App/
│
└── backend/
    ├── APIs/
    │   └── EmployeeAPI.js
    ├── models/
    │   └── EmployeeModel.js
    ├── server.js
    ├── package.json
    └── .env
```

---

# Features

## Employee Management

### Create Employee

Users can add a new employee with:

* Name
* Email
* Mobile Number
* Designation
* Company Name

### View Employees

Displays all employees in a clean card-based UI.

### Edit Employee

Users can update employee information.

### Delete Employee

Users can remove employee records permanently.

---

# Functionalities

## Express Server

The backend is built using Express.js.
---

# Employee Schema

```js
{
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  companyName: String
}
```
---

## Create Employee

### Endpoint

```http
POST /create-emp
```

### Description

Creates a new employee.

---

## Get All Employees

### Endpoint

```http
GET /list
```

### Description

Returns all employees.

---

## Update Employee

### Endpoint

```http
PUT /employees/:id
```

### Description

Updates employee details by ID.

---

## Delete Employee

### Endpoint

```http
DELETE /employees/:id
```

### Description

Deletes an employee by ID.

---

# Error Handling

The backend includes centralized error handling.

## Handled Errors

* Validation Errors
* Cast Errors
* Duplicate Email Errors
* Invalid Routes
* Server Errors

---

# Learning Concepts Covered

This project demonstrates:

* MERN Stack Development
* REST API Development
* MongoDB Integration
* Express Middleware
* React Routing
* State Management
* CRUD Operations
* Form Validation
* API Integration
* Centralized Error Handling
* TailwindCSS Styling

---

# Future Improvements

Potential enhancements:

* Authentication & Authorization
* JWT Login System
* Search & Filter Employees
* Pagination
* Profile Image Upload
* Role-based Access
* Dark Mode
* Toast Notifications
* Protected Routes
* Deployment

---
