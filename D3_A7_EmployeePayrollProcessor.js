/*Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//(1) filter() employees from IT department
let iTEmployees=employees.filter((employee)=>employee.department==="IT")

//Print Details of IT Department Employees
console.log("IT Employees are: ")
console.log(iTEmployees)

//(2) map() to add: netSalary = salary + 10% bonus

let addNetSalary=employees.map((employee)=>
{
    return {id: employee.id, name: employee.name, salary: employee.salary, 
        department: employee.department, netSalary: employee.salary+(employee.salary*0.1)}
})

//Display Employees after adding Net Salary
console.log("New Employees Data after adding Net Salary: ")
console.log(addNetSalary)

//(3) reduce() to calculate total salary payout
let totalSalaryPayout=addNetSalary.reduce((totalSalary,employee)=> totalSalary+employee.netSalary,0)

//Print Total Salary Payout
console.log("Total Salary Payout:",totalSalaryPayout)

//(4) find() employee with salary 30000
let findEmployeeWithSalary30000=addNetSalary.find((employee)=>employee.salary===30000)

//If Employee with Salary 30000 exist
if(findEmployeeWithSalary30000)
{
  //Print Details of Employee whose salary is 30000
  console.log("Details of Employee whose salary is 30000:")
  console.log(findEmployeeWithSalary30000)
}
//If Employee with Salary 30000 does not exist
else
{
  //Print Employee does not exist
  console.log("Employee with salary 30000 does not exist")
}

//(5) findIndex() of employee "Neha"
let findEmployeeWithNameNeha=addNetSalary.findIndex((employee)=>employee.name==="Neha")


console.log("Index of Employee whose name is 'Neha':",findEmployeeWithNameNeha)
//If Employee with Name Neha exist
if(findEmployeeWithNameNeha!=-1)
{
  //Print Details of Employee with Name Neha
  console.log("Details of Employee whose Name is 'Neha':")
  console.log(findEmployeeWithNameNeha)
}
//If Employee with Name Neha does not exist
else
{
  //Print Employee does not exist
  console.log("Employee with name Neha does not exist")
}