//Find the sum of marks in [90,78,65,98]

//Initial Marks Array
let marks=[90,78,65,98];

//Initializing Sum Array
let sum=0;

//Sum of marks using Normal loop
for(let i=0;i<4;i++)
{
    //sum=currentSumOfMarks+currentMarksElementSelected
    sum=sum+marks[i];
}

//Printing Sum of Marks of Marks Array
console.log("Sum of Marks Array is:",sum);