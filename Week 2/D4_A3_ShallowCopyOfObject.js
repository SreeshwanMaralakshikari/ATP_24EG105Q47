//Update User Object(Normal)
//Given Object User:
let user = 
{
    name: "Ravi",
    city: "Hyderabad"
};

//Shallow Copy of user array using Spread Operator and adding a property to it 
let updatedUser={...user,age: 25}

//Output the current Objects: user and updatedUser
console.log(user)
console.log(updatedUser)