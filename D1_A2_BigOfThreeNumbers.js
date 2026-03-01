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
if(a>b)
{
    if(a>c)
    {
        console.log('a is big number')
    }
    else if(a<c)
    {
        console.log("c is big number")
    }
    else
    {
        console.log("a and c are equal and greater than b")
    }
}
else if(b>a)
{
    if(b>c)
    {
        console.log('b is big number')
    }
    else if(b<c)
    {
        console.log("c is big number")
    }
    else
    {
        console.log("b and c are equal and greater than a")
    }
}
else
{
    if(a>c)
    {   
        console.log("a and b are equal and greater than c")
    }
    else if(a<c)
    {
        console.log("c is greater than a and b and a and b are equal")
    }
    else
    {
        console.log("a,b and c are equal")
    }
}