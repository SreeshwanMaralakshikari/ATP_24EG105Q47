/*Test data:
 const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Kiran", marks: [60, 55, 70] },
  { name: "Meena", marks: [95, 92, 88] }
];

Operations:
 1. Calculate average marks per student
 2. Create a new array with { name, average }
 3. Find students with average > 80
 4. Check if any student failed (average < 40)
 5. Extract only student names who passed*/

const students = [
  { name: "Asha", marks: [80, 75, 90] },
  { name: "Kiran", marks: [60, 55, 70] },
  { name: "Meena", marks: [95, 92, 88] }
];

//(1) Calculate average marks per student
let addAverageMarks=[];
for(let student of students)
{
    let avg=0;
    let sum=0;
    for(let mark of student.marks)
    {
        sum=sum+mark
    }
    avg=sum/3
    addAverageMarks.push({name: student.name, marks: student.marks, averageMarks: avg})
}

//Print the Students Array with Average Marks Property Added
console.log(addAverageMarks)

//(2) Create a new array with { name, average }
let nameAndAverageStudents=[]
for(let student of addAverageMarks)
{
  nameAndAverageStudents.push({name: student.name,averageMarks: student.averageMarks})
}

//Print the Name and Average Students Array
console.log(nameAndAverageStudents)


//(3) Find students with average > 80
let studentsWithAverageAbove80=[]
for(let student of addAverageMarks)
{
  if(student.averageMarks>80)
  {
    studentsWithAverageAbove80.push(student)
  }
}

//Print Students with Average above 80 
console.log(studentsWithAverageAbove80)


//(4) Check if any student failed (average < 40)
let failedStudent=false
let failedStudents=[]
for(let student of addAverageMarks)
{
  if(student.averageMarks<40)
  {
    let failedStudent=true
    failedStudents.push(student)
  }
}

//Print result of failed students check
console.log("Existance of Failed Students:",failedStudent)
//List of Failed Students if they exist
if(failedStudent)
{  
  console.log("List of Failed Students:")
  console.log(failedStudents)
}


//(5) Extract only student names who passed
let passedStudents=[]
for(let student of addAverageMarks)
{
  if(student.averageMarks>=40)
  {
    passedStudents.push(student)
  }
}

//Print all passed students
console.log("List of Passed Students:")
console.log(passedStudents)