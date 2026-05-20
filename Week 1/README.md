# Week 1: Basic JavaScript Assignments

A complete collection of JavaScript assignments covering:

- Conditional Statements
- Functions
- Arrays
- Array Searching
- Array Operations
- Objects & Arrays of Objects
- Immutable Updates
- Real-world Problem Solving
- JavaScript Logic Building

This repository is designed to strengthen JavaScript fundamentals through practical assignments and problem-solving exercises.

---

# Folder Structure

```bash
Week 1/
│
├── D1_A1_BigOfTwoNumbers.js
├── D1_A2_BigOfThreeNumbers.js
├── D1_A3_FindSumOfArray.js
├── D1_A4_SmallestElementInArray.js
├── D1_A5_BigOfThreeNumbersFunction.js
├── D1_A6_ArraySumFunction.js
├── D1_A7_ArrayElementSearch.js
├── D1_A8_BillCalculator.js
├── D1_A9_SmartLoginStatusEngine.js
├── D1_A10_CoursePriceTagLabeler.js
├── D1_A11_EnrollmentEligibilityChecker.js
│
├── D2_A1_EmployeeArrayObjectOperations.js
├── D2_A2_UserArrayObject.js
├── D2_A3_CartArrayObject.js
├── D2_A4_StudentArrayObject.js
├── D2_A5_RoleObjectObjects.js
│
└── README.md
```

---

# File Purpose

| File Name | Purpose |
|---|---|
| `D1_A1_BigOfTwoNumbers.js` | Finds the bigger number between two given numbers. |
| `D1_A2_BigOfThreeNumbers.js` | Finds the biggest number among three given numbers. |
| `D1_A3_FindSumOfArray.js` | Calculates the sum of all elements in an array. |
| `D1_A4_SmallestElementInArray.js` | Finds the smallest element in an array. |
| `D1_A5_BigOfThreeNumbersFunction.js` | Uses a function to determine the largest of three numbers. |
| `D1_A6_ArraySumFunction.js` | Uses a function to calculate the sum of array elements. |
| `D1_A7_ArrayElementSearch.js` | Searches for an element in an array and returns its index or `"not found"`. |
| `D1_A8_BillCalculator.js` | Simulates a bill calculation system with additions, discount, GST, and final amount generation. |
| `D1_A9_SmartLoginStatusEngine.js` | Determines user login status and profile completion message using conditional logic. |
| `D1_A10_CoursePriceTagLabeler.js` | Categorizes courses into Budget, Standard, or Premium based on price. |
| `D1_A11_EnrollmentEligibilityChecker.js` | Checks whether a user is eligible for enrollment using conditions and ternary operators. |
| `D2_A1_EmployeeArrayObjectOperations.js` | Performs employee array operations such as insertion, deletion, and updating marks. |
| `D2_A2_UserArrayObject.js` | Handles user array operations including filtering active users, checking roles, and immutable updates. |
| `D2_A3_CartArrayObject.js` | Performs shopping cart operations like total calculation, quantity update, item removal, and mapping data. |
| `D2_A4_StudentArrayObject.js` | Calculates student averages, filters passed students, and performs analysis on student marks. |
| `D2_A5_RoleObjectObjects.js` | Manages role-permission objects, checks permissions, creates unique permission arrays, and transforms object data. |

---

# Day 1 Assignments

## Big of Two Numbers

### Question
Find the big number in given two numbers

### Related Code

```bash
D1_A1_BigOfTwoNumbers.js
```

---

## Big of Three Numbers

### Question
Find the big number in given three numbers

### Related Code

```bash
D1_A2_BigOfThreeNumbers.js
```

---

## Find Sum Of Array

### Question
Find the sum of marks in:

```js
[90,78,65,98]
```

### Related Code

```bash
D1_A3_FindSumOfArray.js
```

---

## Smallest Element in Array

### Question
Find the smallest element in marks array:

```js
[90,78,65,98]
```

### Related Code

```bash
D1_A4_SmallestElementInArray.js
```

---

## Big Of Three Numbers Function

### Question
Write a function that recieves 3 numbers args and return the big number

### Related Code

```bash
D1_A5_BigOfThreeNumbersFunction.js
```

---

## Array Sum Function

### Question
Write a function that recieves an array as arg and return their sum

### Related Code

```bash
D1_A6_ArraySumFunction.js
```

---

## Array Element Search

### Question

Write a function that recieves an array & search element as args and returns the index of that search element in the array.

It should return `"not found"` when search element not found.

### Related Code

```bash
D1_A7_ArrayElementSearch.js
```

---

## Bill Calculator

### Question

Initial data:

```js
let totalAmount = 0;
```

### Tasks

1. Add ₹500 to the total
2. Add ₹1200 to the total
3. Apply a ₹200 discount
4. Add 18% GST
5. Print the final bill amount

### Related Code

```bash
D1_A8_BillCalculator.js
```

---

## Smart Login Status Engine

### Question

Initial data:

```js
let isLoggedIn = true;
let isProfileComplete = false;
```

### Tasks

1. If user is not logged in → show `"Please login"`
2. If logged in but profile incomplete → show `"Complete your profile"`
3. If logged in and profile complete → show `"Welcome back!"`
4. Store the result in `message`
5. Print the message

### Related Code

```bash
D1_A9_SmartLoginStatusEngine.js
```

---

## Course Price Tag Labeler

### Question

Initial data:

```js
let price = 1299;
```

### Tasks

1. If price < 500 → `"Budget Course"`
2. If price between 500–1000 → `"Standard Course"`
3. If price > 1000 → `"Premium Course"`
4. Store label in `courseTag`
5. Print the label

### Related Code

```bash
D1_A10_CoursePriceTagLabeler.js
```

---

## Enrollment Eligibility Checker

### Question

Initial data:

```js
let hasPaid = true;
let hasCompletedBasics = false;
```

### Tasks

1. If both conditions are true → `"Enroll Now"`
2. Otherwise → `"Complete Requirements"`
3. Use ternary operator
4. Store result in `enrollMessage`
5. Print message

### Related Code

```bash
D1_A11_EnrollmentEligibilityChecker.js
```

---

# Day 2 Assignments

## Employee Array Object Operations

### Question

```js
const employees = [
  {eno: 101, name: "Ravi", marks: [78, 82, 91]},
  {eno: 102, name: "Bhanu", marks: [65, 70, 68]},
  {eno: 103, name: "Sneha", marks: [88, 92, 95]},
  {eno: 104, name: "Kiran", marks: [55, 60, 58]},
  {eno: 105, name: "Anitha", marks: [90, 85, 87]},
];
```

### Operations

1. Insert new Emp at 2nd position
2. Remove an emp with name `"Kiran"`
3. Change the last mark `95` to `75` of emp `"Sneha"`

### Related Code

```bash
D2_A1_EmployeeArrayObjectOperations.js
```

---

## User Array Object

### Question

```js
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];
```

### Operations

1. Get only active users
2. Extract only names of active users
3. Check if any admin exists
4. Find user with id = 2
5. Create a new array where Ravi becomes inactive (do NOT mutate)

### Related Code

```bash
D2_A2_UserArrayObject.js
```

---

## Cart Array Object

### Question

```js
const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];
```

### Operations

1. Calculate total cart value
2. Increase quantity of Mouse to 3 (immutably)
3. Remove Laptop from cart
4. Extract only `{ product, totalPrice }` per item
5. Check if all items cost more than ₹300

### Related Code

```bash
D2_A3_CartArrayObject.js
```

---

## Student Array Object

### Question

```js
const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Kiran", marks: [60, 55, 70] },
  { name: "Meena", marks: [95, 92, 88] }
];
```

### Operations

1. Calculate average marks per student
2. Create a new array with `{ name, average }`
3. Find students with average > 80
4. Check if any student failed (average < 40)
5. Extract only student names who passed

### Related Code

```bash
D2_A4_StudentArrayObject.js
```

---

## Role Object Objects

### Question

```js
const roles = {
  admin: ["create", "update", "delete", "view"],
  editor: ["update", "view"],
  viewer: ["view"]
};
```

### Operations

1. Get all role names
2. Check if editor can delete
3. Create a flat array of all unique permissions
4. Add a new role moderator with permissions (immutably)
5. Convert roles object into array of `{ role, permissionsCount }`

### Related Code

```bash
D2_A5_RoleObjectObjects.js
```

---