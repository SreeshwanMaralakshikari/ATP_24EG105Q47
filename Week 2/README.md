# Week 2: Advanced JavaScript & Backend Assignments 

A complete collection of JavaScript and Backend Development assignments covering:

- Array Methods
- ES6 Features
- Object Manipulation
- Classes & OOP
- Shallow vs Deep Copy
- Promises & Async Programming
- Backend Development using Express.js & MongoDB
- REST APIs
- Authentication Concepts

---
# Folder Structure

```bash
Week 2/
│
├── DailyTemperatureAnalyzer.js
├── ShoppingCartAssignment.js
├── OnlineCourseNameProcessor.js
├── StudentMarksList.js
├── StudentPerformanceDashboard.js
├── EmployeePayrollProcessor.js
├── MovieStreamingPlatform.js
├── BankTransactionAnalyzer.js
│
├── TaskManagment/
│   ├── app.js
│   ├── task.js
│   ├── validator.js
│   └── README.md
│
├── ECommerceShoppingCart/
│   ├── app.js
│   ├── cart.js
│   ├── discount.js
│   ├── payment.js
│   ├── product.js
│   └── README.md
│
├── LibraryBookManagementSystem.js
├── ShallowCopyOfArray.js
├── ShallowCopyOfObject.js
├── RestParameterArraySum.js
├── ShallowCopyDifference.js
├── DeepCopyDifference.js
├── ExamPortalSimulator.js
├── OTPCountdownSimulator.js
├── MoneyTransferPromise.js
│
├── UserAndProductBackEnd/
│   │
│   ├── APIs/
│   │   ├── ProductAPI.js
│   │   └── UserAPI.js
│   │
│   ├── req.http
│   ├── server1.js
│   └── Readme.md
│
└── README.md
```

---

# File Purpose Table

| File Name | Purpose |
|---|---|
| `DailyTemperatureAnalyzer.js` | Analyzes daily temperature data and performs calculations or comparisons. |
| `ShoppingCartAssignment.js` | Simulates shopping cart operations such as totals and product handling. |
| `TaskManagment/app.js` | Main application file for the task management system. |
| `TaskManagment/task.js` | Handles task-related operations and task data management. |
| `TaskManagment/validator.js` | Validates task inputs and task-related conditions. |
| `TaskManagment/README.md` | Documentation for the task management mini project. |
| `OnlineCourseNameProcessor.js` | Processes and formats online course names using string operations. |
| `StudentMarksList.js` | Manages and processes student marks data. |
| `StudentPerformanceDashboard.js` | Creates a dashboard-like analysis for student performance data. |
| `EmployeePayrollProcessor.js` | Calculates employee salaries, payroll details, and related operations. |
| `MovieStreamingPlatform.js` | Simulates movie platform features such as filtering or managing movies. |
| `BankTransactionAnalyzer.js` | Analyzes banking transactions and performs transaction-based calculations. |
| `ECommerceShoppingCart/app.js` | Main application file for the e-commerce shopping cart project. |
| `ECommerceShoppingCart/cart.js` | Handles cart operations such as adding and removing products. |
| `ECommerceShoppingCart/discount.js` | Applies discount calculations to cart items. |
| `ECommerceShoppingCart/payment.js` | Handles payment-related logic for checkout simulation. |
| `ECommerceShoppingCart/product.js` | Manages product-related information and operations. |
| `ECommerceShoppingCart/README.md` | Documentation for the e-commerce shopping cart project. |
| `LibraryBookManagementSystem.js` | Simulates a library management system for books and records. |
| `ShallowCopyOfArray.js` | Demonstrates shallow copying of arrays in JavaScript. |
| `ShallowCopyOfObject.js` | Demonstrates shallow copying of objects in JavaScript. |
| `RestParameterArraySum.js` | Uses rest parameters to calculate sums dynamically. |
| `ShallowCopyDifference.js` | Explains differences and behavior of shallow copies. |
| `DeepCopyDifference.js` | Demonstrates deep copy concepts and differences from shallow copy. |
| `ExamPortalSimulator.js` | Simulates an online exam portal system with related operations. |
| `OTPCountdownSimulator.js` | Simulates OTP countdown functionality using timers. |
| `MoneyTransferPromise.js` | Demonstrates Promise handling through money transfer simulation. |
| `UserAndProductBackEnd` | Introduces backend development with Node.js and Express.js, focusing on REST APIs, modular structure, request handling, and backend fundamentals. |
| `README.md` | Provides the complete overview, folder structure, and assignment details for Week 2. |

---

# Day 3 Assignments

---

# Daily Temperature Analyzer

## Scenario

You are analyzing daily temperatures recorded by a weather application.

---

## Test Data

```js
const temperatures = [32, 35, 28, 40, 38, 30, 42];
```

---

## Tasks

1. Use `filter()` to get temperatures above 35
2. Use `map()` to convert Celsius → Fahrenheit
3. Use `reduce()` to calculate average temperature
4. Use `find()` to get the first temperature above 40
5. Use `findIndex()` to get the index of temperature 28

---

## Related Code

```bash
DailyTemperatureAnalyzer.js
```

---

# Shopping Cart Summary

## Scenario

You are building a shopping cart summary system for an e-commerce website.

---

## Test Data

```js
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
```

---

## Tasks

1. Use `filter()` to get only in-stock products
2. Use `map()` to create a new array with:
   ```js
   { name, totalPrice }
   ```
3. Use `reduce()` to calculate total cart value
4. Use `find()` to get details of `"Mouse"`
5. Use `findIndex()` to find position of `"Keyboard"`

---

## Related Code

```bash
ShoppingCartAssignment.js
```

---

# Task Management System

## JavaScript Task Management Practice Project

This project is a simple Task Management System application created using JavaScript modules.

The project demonstrates how different functionalities of a task management application can be separated into multiple files and connected together using modular programming.

---

# Project Overview

This project simulates the basic workflow of a Task Management System.

The application includes:

- Task creation
- Task validation
- Task management
- Modular JavaScript structure

The project is designed for practicing:
- JavaScript modules
- file organization
- reusable functions
- task management logic
- frontend application structure

---



# Project Structure

```bash
TaskManagment/
│
├── app.js
├── task.js
├── validator.js
└── README.md
```

---

# Files Description

## 1. app.js

### Purpose
Main application entry point.

### Responsibilities
- Connects all modules together
- Executes task management workflow
- Controls overall application flow

---

## 2. task.js

### Purpose
Handles task-related operations.

### Features
- Create tasks
- Store task details
- Manage task information
- Display task data

---

## 3. validator.js

### Purpose
Handles validation operations.

### Features
- Validate task inputs
- Check task data correctness
- Prevent invalid task entries
- Improve application reliability

---

# Online Course Name Processor

## Scenario

Preparing course names for display on a website.

---

## Test Data

```js
const courses = ["javascript", "react", "node", "mongodb", "express"];
```

---

## Tasks

1. Filter courses with name length > 5
2. Convert course names to uppercase
3. Generate:
   ```txt
   JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS
   ```
4. Find `"react"`
5. Find index of `"node"`

---

## Related Code

```bash
OnlineCourseNameProcessor.js
```

---

# Student Marks List

## Scenario

You receive marks from an exam system.

---

## Test Data

```js
const marks = [78, 92, 35, 88, 40, 67];
```

---

## Tasks

1. Filter pass marks (≥ 40)
2. Add 5 grace marks
3. Find highest mark
4. Find first mark below 40
5. Find index of mark 92

---

## Related Code

```bash
StudentMarksList.js
```

---

# Student Performance Dashboard

## Scenario

College result analysis system.

---

## Test Data

```js
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
```

---

## Tasks

1. Filter passed students
2. Add grades:
   - ≥90 → A
   - ≥75 → B
   - ≥60 → C
   - else → D
3. Calculate average marks
4. Find student with 92 marks
5. Find index of `"Kiran"`

---

## Related Code

```bash
StudentPerformanceDashboard.js
```

---

# Employee Payroll Processor

## Scenario

Salary processing module for HR application.

---

## Test Data

```js
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
```

---

## Tasks

1. Filter IT employees
2. Add:
   ```js
   netSalary = salary + 10% bonus
   ```
3. Calculate total salary payout
4. Find employee with salary 30000
5. Find index of `"Neha"`

---

## Related Code

```bash
EmployeePayrollProcessor.js
```

---

# Movie Streaming Platform

## Scenario

Movie recommendation system.

---

## Test Data

```js
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
```

---

## Tasks

1. Filter Sci-Fi movies
2. Return:
   ```txt
   Inception (8.8)
   ```
3. Calculate average rating
4. Find `"Joker"`
5. Find index of `"Avengers"`

---

## Related Code

```bash
MovieStreamingPlatform.js
```

---

# Bank Transaction Analyzer

## Scenario

Bank statement summary system.

---

## Test Data

```js
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
```

---

## Tasks

1. Filter all credit transactions
2. Extract transaction amounts
3. Calculate final account balance
4. Find first debit transaction
5. Find index of transaction amount 10000

---

## Related Code

```bash
BankTransactionAnalyzer.js
```

---

# E-Commerce Shopping Cart

## JavaScript Shopping Cart Practice Project

This project is a simple E-Commerce Shopping Cart application created using JavaScript modules.

The project demonstrates how different functionalities of an online shopping cart system can be separated into multiple files and connected together using modular programming.

---

# Project Overview

This project simulates the basic workflow of an E-Commerce Shopping Cart system.

The application includes:

- Product management
- Cart management
- Discount handling
- Payment processing
- Modular JavaScript structure

The project is designed for practicing:
- JavaScript modules
- file organization
- reusable functions
- shopping cart logic
- frontend application structure

---

# Project Structure

```bash
ECommerceShoppingCart/
│
├── app.js
├── cart.js
├── discount.js
├── payment.js
├── product.js
└── README.md
```

---

# Files Description

## 1. app.js

### Purpose
Main application entry point.

### Responsibilities
- Connects all modules together
- Executes shopping cart workflow
- Controls overall application flow

---

## 2. cart.js

### Purpose
Handles shopping cart operations.

### Features
- Add products to cart
- Manage cart items
- Calculate total price
- Store selected products

---

## 3. discount.js

### Purpose
Handles discount calculations.

### Features
- Apply discounts
- Calculate discounted prices
- Manage offer logic

---

## 4. payment.js

### Purpose
Handles payment-related operations.

### Features
- Process payments
- Calculate final payable amount
- Simulate payment workflow

---

## 5. product.js

### Purpose
Manages product information.

### Features
- Store product details
- Display product information
- Product data handling

---


---

# Day 4 Assignments

---

# Library Book Management System

## Objective

Create a `Book` class and use it to manage a collection of books in a library.

---

## Properties

- title
- author
- pages
- isAvailable

---

## Methods

- borrow()
- returnBook()
- getInfo()
- isLongBook()

---

## Operations

1. Display all books
2. Borrow books
3. Return books
4. Count long books
5. List available books

---

## Related Code

```bash
LibraryBookManagementSystem.js
```

---

# Copy & Extend an Array

## Goal

Learn shallow copy using spread operator.

---

## Tasks

- Copy array
- Add `"orange"`
- Print arrays

---

## Related Code

```bash
ShallowCopyOfArray.js
```

---

# Update User Object

## Goal

Learn object cloning and extension.

---

## Tasks

- Clone object
- Add age property
- Print both objects

---

## Related Code

```bash
ShallowCopyOfObject.js
```

---

# Rest Parameter Array Sum

## Question

Write a function that receives any number of arguments and returns their sum.

---

## Related Code

```bash
RestParameterArraySum.js
```

---

# Shallow Copy Difference

## Goal

Understand mutation behavior in shallow copy.

---

## Tasks

1. Create shallow copy
2. Modify nested values
3. Observe original object changes

---

## Related Code

```bash
ShallowCopyDifference.js
```

---

# Deep Copy Difference

## Goal

Understand deep copy isolation.

---

## Tasks

1. Create deep copy
2. Modify nested data
3. Verify original remains unchanged

---

## Related Code

```bash
DeepCopyDifference.js
```

---

# Exam Portal Simulator

## Scenario

- Show:
  ```txt
  Exam submitted successfully
  ```

- After 2 seconds:
  ```txt
  Evaluating answers...
  ```

- After 4 seconds:
  ```txt
  Result: Pass
  ```

---

## Related Code

```bash
ExamPortalSimulator.js
```

---

# OTP Countdown Simulator

## Scenario

- OTP sent successfully
- Start 10-second countdown
- Allow resend after countdown

---

## Related Code

```bash
OTPCountdownSimulator.js
```

---

# Money Transfer Promise

## Goal

Understand JavaScript Promises and asynchronous handling.

---

## Related Code

```bash
MoneyTransferPromise.js
```

---

# Day 5 Backend Project

A backend application built using Node.js, Express.js, and MongoDB for handling APIs and database operations.

---

# Project Overview

This project demonstrates:

- Express server setup
- API routing
- MongoDB database connection
- CRUD operations
- REST API handling

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

# Project Structure

```bash
UserAndProductBackEnd/
│
├── APIs/
│   ├── userApi.js
│   └── ...
│
├── server1.js
├── package.json
├── req.http
├── Readme.md
└── .env
```

---

# Purpose of the Project

Building a backend server using Express.js and MongoDB to create and test REST APIs.

---

# Features

- Modular API routing
- Request handling
- Database integration
- CRUD APIs
- REST API testing

---

# Learning Outcomes

- Express server setup
- CRUD API development
- MongoDB integration
- REST architecture
- Backend project structuring
- API testing using REST Client
