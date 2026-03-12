/*Assignments:
const employees = [
  {eno: 101, name: "Ravi", marks: [78, 82, 91],},
  {eno: 102, name: "Bhanu", marks: [65, 70, 68],},
  {eno: 103, name: "Sneha", marks: [88, 92, 95],},
  {eno: 104, name: "Kiran", marks: [55, 60, 58],},
  {eno: 105, name: "Anitha", marks: [90, 85, 87],},
];

1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3. Change the last mark 95 to 75 of emp  "Sneha"*/

//Given Employees Array
const employees = [
  {eno: 101, name: "Ravi", marks: [78, 82, 91],},
  {eno: 102, name: "Bhanu", marks: [65, 70, 68],},
  {eno: 103, name: "Sneha", marks: [88, 92, 95],},
  {eno: 104, name: "Kiran", marks: [55, 60, 58],},
  {eno: 105, name: "Anitha", marks: [90, 85, 87],},
];

//(1) Insert new Emp at 2nd position
employees.splice(2,0,
    {eno: 106, name: "Sreeshwan", marks: [90, 95, 92],}
    )

//Observe the result of Operation (1)
console.log("Employees Objects after inserting new Employee at 2nd Position:")
console.log(employees);

//(2) Remove an emp with name "Kiran"
let removedEmployee=employees.splice(4,1);
console.log("Deleted Employee with name 'Kiran':",removedEmployee);

//Observe the result of Operation (2)
console.log(employees)

//(3) Change the last mark 95 to 75 of emp "Sneha"
employees.splice(3,1,
  {eno: 103, name: "Sneha", marks: [88, 92, 75],}
  )

//Observe the result of Operation (3)
console.log("Employees Objects after Changing the last mark 95 to 75 of emp  'Sneha':")
console.log(employees)