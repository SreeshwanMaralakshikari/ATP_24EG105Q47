/*2.OTP Countdown Simulator (Console App)
------------------------------------

    Simulate OTP sending flow in Node.js:
    Show “OTP Sent Successfully”
    Start 10-second countdown
    Allow resend only after countdown ends*/

//(1)Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")

let seconds=10;
let intervalId=setInterval(()=>
{
    //(2)Start 10-second countdown
    seconds--;
    console.log(`OTP can resend after ${seconds} secs`)

    if(seconds===0)
    {
        //(3)Allow resend only after countdown ends
        console.log("Resend OTP");
        clearInterval(intervalId)
    }
},1000)
