//Promise
    console.log("I will send 10,000 by tomorrow")
    let futureCondition=true;

    //Promise Producer(Create Promise)
    const promiseObj=new Promise((fulfilled,rejected)=>
    {
        setTimeout(()=>
        {
            if(futureCondition===true)
            {
                fulfilled("Hello Friend! I have send 10,000 rupess.")
            }
            else
            {
                rejected("Number you are calling is not in networking range.")
            }
        },10000);
    })

    //Promise Consumer()
    promiseObj
    .then((message)=>console.log("Message in then:",message)) //then = Accepted Case
    .catch((errorMessage)=>console.log("error is: ",errorMessage)) //catch = Rejected Case
    
