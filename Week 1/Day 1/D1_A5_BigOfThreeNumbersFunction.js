//Write a function that recieves 3 numbers args and return the big number

//Considering even equal elemetents
let bigOf3=function(n1,n2,n3)
{
    console.log(`n1 is: ${n1}, n2 is: ${n2} and n3 is: ${n3}`)
    if(n1>n2)
    {
        if(n1>n3)
        {
            console.log('n1 is big number')
            return n1
        }
        else if(n1<n3)
        {
            console.log("n3 is big number")
            return n3
        }
        else
        {
            console.log("n1 and n3 are equal and greater than n2")
            return n1
        }
    }
    else if(n2>n1)
    {
        if(n2>n3)
        {
            console.log('n2 is big number')
            return n2
        }
        else if(n2<n3)
        {
            console.log("n3 is big number")
            return n3
        }
        else
        {
            console.log("n2 and n3 are equal and greater than n1")
            return n2
        }
    }
    else
    {
        if(n1>n3)
        {   
            console.log("n1 and n2 are equal and greater than n3")
            return n1
        }
        else if(n1<n3)
        {
            console.log("n3 is greater than n1 and n2 and n1 and n2 are equal")
            return n3
        }
        else
        {
            console.log("n1,n2 and n3 are equal")
            return n1
        }
    }
}

//Case 1: Sending variables where n1>n2 and n1>n3
let r1=bigOf3(10,5,7)
console.log("Biggest Number is:",r1)

//Case 2: Sending variables where n1>n2 and n1<n3
let r2=bigOf3(10,5,12)
console.log("Biggest Number is:",r2)

//Case 3: Sending variables where n1>n2 and n1=n3
let r3=bigOf3(10,5,10)
console.log("Biggest Number is:",r3)

//Case 4: Sending variables where n1<n2 and n2>n3
let r4=bigOf3(6,8,3)
console.log("Biggest Number is:",r4)

//Case 5: Sending variables where n1<n2 and n2<n3
let r5=bigOf3(6,8,10)
console.log("Biggest Number is:",r5)

//Case 6: Sending variables where n1<n2 and n2=n3
let r6=bigOf3(6,8,8)
console.log("Biggest Number is:",r6)

//Case 7: Sending variables where n1=n2 and n1>n3
let r7=bigOf3(8,8,5)
console.log("Biggest Number is:",r7)

//Case 8: Sending variables where n1=n2 and n1<n3
let r8=bigOf3(7,7,8)
console.log("Biggest Number is:",r8)

//Case 9: Sending variables where n1=n2 and n1=n3
let r9=bigOf3(9,9,9)
console.log("Biggest Number is:",r9)
