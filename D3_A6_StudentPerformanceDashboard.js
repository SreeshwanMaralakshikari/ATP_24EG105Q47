/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1) filter() students who passed (marks ≥ 40)
const studentsWhoPassed=students.filter((studentObj)=>studentObj.marks>=40)

//Print Details of Students who Passed
console.log(studentsWhoPassed)

//2) map() to add a grade field: ≥90 → A, ≥75 → B, ≥60 → C, else → D
const addGrade=students.map((studentObj)=>
{
  if(studentObj.marks>=90)
    return {id: studentObj.id, name: studentObj.name, marks: studentObj.marks,grade: "A"}
  else if(studentObj.marks<90 && studentObj.marks>=75)
    return {id: studentObj.id, name: studentObj.name, marks: studentObj.marks,grade: "B"}
  else if(studentObj.marks<75 && studentObj.marks>=60)
    return {id: studentObj.id, name: studentObj.name, marks: studentObj.marks,grade: "C"}
  else
    return {id: studentObj.id, name: studentObj.name, marks: studentObj.marks,grade: "D"}
})

//Print Student Perfomance Details after adding Grade
console.log("Student Performance Details after adding Grade Field: ")
console.log(addGrade)

//3) reduce() to calculate average marks
  const sumOfMarks=students.reduce((sum,studentObj)=>sum+studentObj.marks,0)
  const avgOfMarks=sumOfMarks/students.length

  //Print Average Marks of All Students
  console.log("Average Marks of All Students:",avgOfMarks)

//4) find() the student who scored 92
  const findStudentWithMarks92=students.find((studentObj)=>studentObj.marks===92)

//If Student who scored 92 Marks exists
if(findStudentWithMarks92)
{
  //Print Details of Student who scored 92 Marks:
  console.log("Details of Student who scored 92 Marks:")
  console.log(findStudentWithMarks92)
}
//If Student who scored 92 Marks does not exists
else
{
  //Print Student does not exist
  console.log("Student who scored 92 Marks does not exist")
}

//5) findIndex() of student "Kiran"
  const findIndexOfStudentWithNameKiran=students.findIndex((studentObj)=>studentObj.name=="Kiran")

//If Student with Name Kiran Exists
if(findIndexOfStudentWithNameKiran!=-1)
{
  //Print Details of Student with Name Kiran
  console.log("Index of Student with Name 'Kiran':",findIndexOfStudentWithNameKiran)
}
//If Student with Name Kiran does not exist
else
{
  //Print Student does not exist
  console.log("Student with Name Kiran does not exist")
}