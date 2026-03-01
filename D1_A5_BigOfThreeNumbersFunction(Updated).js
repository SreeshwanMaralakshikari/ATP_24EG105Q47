//Write a function that recieves 3 numbers args and return the big number

let bigof3=function(a,b,c)
{
    console.log(`n1 is: ${a}, n2 is: ${b} and n3 is: ${c}`)
    if(a>b)
    {
        if(a>c)
        {
            console.log('n1 is big number')
        }
        else if(a<c)
        {
            console.log("n3 is big number")
        }
        else
        {
            console.log("n1 and n3 are equal and greater than n2")
        }
    }
    else if(b>a)
    {
        if(b>c)
        {
            console.log('n2 is big number')
        }
        else if(b<c)
        {
            console.log("n3 is big number")
        }
        else
        {
            console.log("n2 and n3 are equal and greater than n1")
        }
    }
    else
    {
        console.log("n1,n2 and n3 are equal")
    }
}

bigof3(10,5,2);
