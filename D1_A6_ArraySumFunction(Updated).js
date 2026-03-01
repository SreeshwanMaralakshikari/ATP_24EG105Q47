//Write a function that recieves an array as arg and return their sum
let arraySum=function(a)
{
    let sum=0;
    for(let i in a)
    {
        sum=sum+i;
    }
    return sum;
}

let arr=[15,22,38,41,57];
let result=arraySum(arr);
console.log("The sum of array elements is:",result);