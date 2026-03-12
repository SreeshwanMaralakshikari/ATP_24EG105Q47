//Write a function that recieves an array as arg and return their sum

//Initialiazing Array
let arr=[15,22,38,41,57];

//function to find array sum
let arraySum=function(a)
{
    //initializing sum = 0
    let sum=0;

    //finding array sum using normal loop
    for(let i=0;i<a.length;i++)
    {
        //sum=currentSumOfMarks+currentMarksElementSelected
        sum=sum+a[i];
    }

    //returning sum of array elements
    return sum;
}

//result calling array sum function and after function completes array sum is stored in result
let result=arraySum(arr);

//print result(array sum)
console.log("The sum of array elements is:",result);