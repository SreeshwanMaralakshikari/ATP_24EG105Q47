/*Write a function that recieves an array & search element as args and returns the index of
that search element in the array. It should return "not found" when search element not found*/

let searchArray=function(a,k)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==k)
        {
            index=i;
        }
    }
    if(index)
    {
        return index;
    }
    else
    {
        return "not found";
    }
}

let arr=[10,20,30,40,50];

let k1=40;
let result1=searchArray(arr,k1);
console.log("The key",k1,"is present in index:",result1);

let k2=60;
let result2=searchArray(arr,k2);
console.log("The key",k2,"is present in index:",result2);
