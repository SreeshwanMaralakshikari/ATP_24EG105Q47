/*Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    4. find() the course "react"
    5. findIndex() of "node"*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

//(1) filter() courses with name length > 5
let coursesWithNameLengthGreaterThan5=courses.filter((course)=>course.length>5)

//Print Details of Courses with Name Length greater than 5
console.log("Details of Courses with Name Length greater than 5")
console.log(coursesWithNameLengthGreaterThan5)

//(2) map() to convert course names to uppercase
let upperCaseCourseNameConversion=courses.map((course)=>course.toUpperCase())

//Print Details of Courses with Names in Uppercase
console.log("Details of Courses with Names in Uppercase:")
console.log(upperCaseCourseNameConversion)

//(3) reduce() to generate a single string:"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let singleStringCourse=upperCaseCourseNameConversion.reduce((singleString,course)=>
    singleString+(' | '+course),)

console.log(singleStringCourse)

//(4) find() the course "react"
let findCourseReact=courses.find((course)=>course==="react")

//If Course React Exists
if(findCourseReact)
{
    //Print the details of Course React
    console.log("Details of Course React:")
    console.log(findCourseReact)
}
//If Course React does not exist
else
{
    //Print Course does not exist
    console.log("The React Course does not exist")
}

//(5) findIndex() of "node"
let findIndexOfCourseNode=courses.findIndex((course)=>course==="node")

//If Course Node Exists
if(findIndexOfCourseNode!=-1)
{
    //Print the index of Course Node
    console.log("Details of Course Node:",findIndexOfCourseNode)
}
//If Course Node does not exist
else
{
    //Print Course does not exist
    console.log("The Course Node does not exist")
}