/*Test data:
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

Operations:
1. Get only active users
2. Extract only names of active users
3. Check if any admin exists
4. Find user with id = 2
5. Create a new array where Ravi becomes inactive (do NOT mutate)*/

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

//(1) Get only active users
let activeUsers=[];
for(let user of users)
{
  if(user.active===true)
  {
    activeUsers.push(user)
  }
}

//Print Active Users
console.log("Complete Details of Active Users: ")
console.log(activeUsers)

//(2) Extract only names of active users
let activeUsersNamesOnly=[];
for(let user of users)
{
  if(user.active===true)
  {
    activeUsersNamesOnly.push(user.name)
  }
}

//Print Active Users Names Onlys
console.log("Names of Active Users Only: ")
console.log(activeUsersNamesOnly)

//(3) Check if any admin exists
let adminExist=false;
let admin=[];
for(let user of users)
{
  if(user.role==="admin")
  {
    adminExist=true;
    admin.push(user)
  }
}

//Print the result of Admin Existance
console.log("Existance of Admin:",adminExist)
//If Admin Exists, then print Admin Details
{
  console.log("Complete Details of Admin/Admins:",admin)
}

//(4) Find user with id = 2
let userWithId2Exist=false;
let userwithId2;
for(let user of users)
{
  if(user.id===2)
  {
    userWithId2Exist=true;
    userWithId2=user;
    break
  }
}

//Print the result of User Id 2 Existance
console.log("Existance of User with id 2:",userWithId2Exist)
//If User with Id 2 Exists, then print User with Id 2 Details
if(userWithId2Exist)
{ 
  console.log("Complete Details of User with id 2:",userWithId2)
}

//(5) Create a new array where Ravi becomes inactive (do NOT mutate)
let newUsers=[];
for(let user of users)
{
  if(user.name==="Ravi")
  {
    newUsers.push({id: user.id, name: user.name, role: user.role, active: false})
  }
  else
  {
    newUsers.push(user)
  }
}

//Print the new Users Array
console.log(newUsers)