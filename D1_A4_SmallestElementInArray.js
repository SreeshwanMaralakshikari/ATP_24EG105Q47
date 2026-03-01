//Find the smallest element in marks array [90,78,65,98]

let marks=[90,78,65,98];
let min=marks[0];

for(let i=1;i<4;i++)
{
    if(marks[i]<min)
        min=marks[i];
}

console.log("Smallest Element in Marks array is:",min);