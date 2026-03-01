//Write a function that recieves 3 numbers args and return the big number

let bigof3=function(a,b,c)
{
    let t1=a>b?a:b;
    let t2=t1>c?t1:2;
    return t2;
}

let n1=3;
let n2=8;
let n3=5;
let result=bigof3(n1,n2,n3);
console.log("The big number is:",result);