/*Smart Login Status Engine
----------------------------------------
Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message*/

let isLoggedIn=true;
let isProfileComplete=false;
let message;

//(1) If user is not logged in → show "Please login"
if(!isLoggedIn)
{
    //(4) Store the result in message
    message="Please login"
}
//(2) If logged in but profile incomplete → show "Complete your profile"
if(isLoggedIn&&!isProfileComplete)
{
    //(4) Store the result in message
    message="Complete your profile"
}
//(3) If logged in and profile complete → show "Welcome back!"
else
{
    //(4) Store the result in message
    message="Welcome back!"
}

//(5) Print the message
console.log("Status",message)