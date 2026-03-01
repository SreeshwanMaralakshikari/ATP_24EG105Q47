//Find the smallest element in marks array [90,78,65,98]

let marks=[90,78,65,98];
let min=marks[0];

for(let i in marks)
{
    if(i<min)
        min=i;
}

console.log("Smallest Element in Marks array is:",min);