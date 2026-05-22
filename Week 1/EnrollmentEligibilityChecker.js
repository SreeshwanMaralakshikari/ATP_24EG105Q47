//Enrollment Eligibility Checker

let hasPaid = true;
let hasCompletedBasics = false;

//(1)&(2)Checking both Requirements, (3) using ternary operator  and (4) storing the result in enrollMessage
let enrollMessage=(hasPaid&&hasCompletedBasics)?"Enroll Now":"Complete Requirements"

//(5) Print enrollMesssage
console.log(enrollMessage)