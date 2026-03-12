/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
        const user = {
            id: 101,
            name: "Ravi",
            preferences: {
                theme: "dark",
                language: "en"
            }
        };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/

//Given Object User:
const user =
{
    id: 101,
    name: "Ravi",
    preferences: 
    {
        theme: "dark",
        language: "en"
    }
};

//(1) Create a shallow copy of User using Spread Operator
const updatedUser={...user}

//(2.1) Change: name in the copied object
updatedUser.name="Rakesh"

//(2.2) Change: preferences.theme in the copied object
updatedUser.preferences.theme="bright"

//(2) Log both original and copied objects and Observe what changes and what doesn’t
console.log(user)
console.log(updatedUser)

/*In Shallow Copy, if we change the value of nested properties the shallow copy property will also change as shallow copy
copies the refernence of nested properties not values*/