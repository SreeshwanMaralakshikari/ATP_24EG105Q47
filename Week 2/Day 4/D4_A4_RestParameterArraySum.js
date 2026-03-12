//Write a Function that receives any number of arguments and return their sum
    
//Normal Version
    //Writing a function that receives any number of arguments and return their sum
    function findSumArray(...a)
    {
        let n=a.length
        let sum=0;
        for(let i of a)
        {
            sum=sum+i
        }
        return sum
    }

    //Sending 3 Values as paramaters
    let r1=findSumArray(10,20,30)
    console.log(r1)

    //Sending 5 Values as paramaters
    let r2=findSumArray(1,3,5,7,9)
    console.log(r2)

//Reduce Version
    //Writing a function that receives any number of arguments and return their sum
    function findSumArray2(...a)
    {
        let sum=a.reduce((sum,element)=>sum+element)
        return sum;
    }

    //Sending 5 Values as paramaters
    let r3=findSumArray(10,20,30,40,50)
    console.log(r3)

    //Sending 8 Values as paramaters
    let r4=findSumArray(1,3,5,7,9,11,13,15)
    console.log(r4)

//Sir Version
    //Writing a function that receives any number of arguments and return their sum
    const findSum=(...numbers)=>{
        return numbers.reduce((sum,el)=>sum+el)
    }

    //Sending 5 Values as paramaters
    let result=findSum(1,2,3,4,5)
    console.log(result)