//Find the big number in given three numbers
let a=10;
let b=20;
let c=35;

//Basic(Considering Non-Equal)
if(a>b && a>c)
{
    console.log('a is big number');
}
else if(b>a && b>c)
{
    console.log('b is big number');
}
else
{
    console.log('c is big number');
}

//Using Tertitary Operator
let t1=a>b?a:b;
let t2=t1>c?a:b;

//printing result for tertitary operation
console.log("Biggest Number is",t2)

//Considering all conditions

//if a is greater than b
if(a>b)
{
    //If a is greater than c
    if(a>c)
    {
        console.log('a is big number')
    }
    //If a is less than c
    else if(a<c)
    {
        console.log("c is big number")
    }
    //If a and c are equal
    else
    {
        console.log("a and c are equal and greater than b")
    }
}
//if a is less than b
else if(a<b)
{
    //If b is greater than c
    if(b>c)
    {
        console.log('b is big number')
    }
    //If b is less than c
    else if(b<c)
    {
        console.log("c is big number")
    }
    //If b and c are equal
    else
    {
        console.log("b and c are equal and greater than a")
    }
}
//if a and b are equal
else
{
    //If a is greater than c
    if(a>c)
    {   
        console.log("a and b are equal and greater than c")
    }
    //If a is less than c
    else if(a<c)
    {
        console.log("c is greater than a and b and a and b are equal")
    }
    //If a and c are equal
    else
    {
        console.log("a,b and c are equal")
    }
}