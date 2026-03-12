//importing required files from task.js
import {addTask,getAllTasks,completeTask} from './task.js'

//(1) Add some tasks
addTask("eating","high","2026-03-12")
addTask("sleeping","LOW","2026-04-21")

//(2) Display all tasks
console.log(getAllTasks())

//(3) Complete a task
completeTask(1)

//(4) Display all tasks again
console.log(getAllTasks())

