//importing required files from validator.js
import {validateTitle,validatePriority,validateDueDate} from './validator.js'
let tasks = [];
let count=0;

// 1. Add new task
function addTask(title, priority, dueDate) 
{

    if(!validateTitle(title)||!validatePriority(priority)||!validateDueDate(dueDate))
    {
        console.log("Task is Invalid. Failed to Push");
        return false;
    }
    else
    {
        console.log("Task is Valid. Pushed Successfully");
        count++;
        tasks.push({taskID: count,taskTitle: title,taskPriority: priority,taskDueDate: dueDate,taskStatus: "In Progress"})
        return true;
    }
}
                    
// 2. Get all tasks
function getAllTasks() 
{
    if(tasks.length==0)
    {
        console.log("No Tasks Available")
    }
    else
        return tasks
}
                    
// 3. Mark task as complete
function completeTask(taskId) 
{
    for(let task of tasks)
    {
        if(task.taskID===taskId)
        {
            task.taskStatus="Complete"
            return true;
        }
    }
    console.log("Invalid Task ID")
    return false
}

//exporting required files to task.js
export {addTask,getAllTasks,completeTask}