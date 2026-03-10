/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

const marks = [78, 92, 35, 88, 40, 67];

//(1) filter() marks ≥ 40 (pass marks)
let passMarks=marks.filter((mark)=>mark>=40)

//Print the array of passed marks
console.log("Passed Marks Collection:")
console.log(passMarks)

//(2) map() to add 5 grace marks to each student
let add5GraceMarks=marks.map((mark)=>mark+5)

//Print the array of marks after adding 5 grace marks
console.log("Marks Collection after adding 5 Grace Marks:")
console.log(add5GraceMarks)

//(3) reduce() to find highest mark
let highestMark=marks.reduce((highest,mark)=>highest>mark?highest:mark)

//Print the highest marks
console.log("Highest Mark:",highestMark)

//(4) find() first mark below 40
let findFirstMarkBelow40=marks.find((mark)=>mark<40)

//If Mark below 40 found
if(findFirstMarkBelow40)
{
    //Print the first mark below 40
    console.log("Details of First mark below 40:")
    console.log(findFirstMarkBelow40)
}
//If Mark below 40 not found
else
{
    //Print mark not found
    console.log("Mark below 40 not found")
}

//(5) findIndex() of mark 92
let findIndexOfMark92=marks.findIndex((mark)=>mark===92)

//If Mark 92 found
if(findIndexOfMark92!=-1)
{
    //Print the index of Mark 92
    console.log("Index of Mark 92:",findIndexOfMark92)
}
//If Mark 92 not found
else
{
    //Print mark not found
    console.log("Mark 92 not found")
}