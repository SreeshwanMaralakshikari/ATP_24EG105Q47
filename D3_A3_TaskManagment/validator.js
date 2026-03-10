// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) 
{
    if(title)
    {
        if(title.length>=3)
        {
            console.log("Title is Valid")
            return true
        }
        else
            console.log("There are less than 3 characters in the Title")
            return false
    }
    else
    {
        console.log("Title Required")
        return false
    }
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) 
{
    let pr=priority.toLowerCase();
    if(pr==="low"||pr==="medium"||pr==="high")
    {
        console.log("Priority is valid")
        return true
    }
    else
    {
        console.log("Priority is Invalid")
        return false
    }
}

// 3. Validate due date (must be future date)
function validateDueDate(date) 
{
    let dueDate=new Date(date)
    let currDate=new Date()
    if(dueDate>currDate)
    {
        console.log("Due Date is Valid")
        return true;
    }   
    else
    {
        console.log("Due Date is invalid")
        return false
    }
}

//exporting required function to task.js
export {validateTitle,validatePriority,validateDueDate};