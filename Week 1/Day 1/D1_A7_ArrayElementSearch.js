/*Write a function that recieves an array & search element as args and returns the index of
that search element in the array. It should return "not found" when search element not found*/

//Initializing array
let arr=[10,20,30,40,50];

//function to search for key k in array
let searchArray=function(a,k)
{
    //Searching for key k in array using normal loop
    for(let i=0;i<a.length;i++)
    {
        //if key is present
        if(a[i]===k)
        {
            //return index of array element
            return i;
        }
    }

    //if key nor present
    return "not found";
}

//Searching for key which is present
let k1=40;

//storing result
let result1=searchArray(arr,k1);

//printing result
console.log("The key",k1,"is present in index:",result1);

//Searching for key which is not present
let k2=60;
//storing result
let result2=searchArray(arr,k2);
//printing result
console.log("The key",k2,"is present in index:",result2);
