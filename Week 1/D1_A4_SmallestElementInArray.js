//Find the smallest element in marks array [90,78,65,98]

//Initial Marks Array
let marks=[90,78,65,98];

//Initializing Min Element in array
let min=marks[0];

//Smallest Mark using Normal Loop
for(let i=1;i<marks.length;i++)
{
    //If current selected mark less than mark stored in min
    if(marks[i]<min)
        min=marks[i];
}

//Printing Smallest Mark in Marks Array
console.log("Smallest Element in Marks array is:",min);