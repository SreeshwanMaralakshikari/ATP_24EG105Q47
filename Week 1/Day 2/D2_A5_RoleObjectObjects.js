/*Test data:
const roles = {
  admin: ["create", "update", "delete", "view"],
  editor: ["update", "view"],
  viewer: ["view"]
};

Operations:
 1. Get all role names
 2. Check if editor can delete
 3. Create a flat array of all unique permissions
 4. Add a new role moderator with permissions (immutably)
 5. Convert roles object into array of { role, permissionsCount }*/

 const roles = {
  admin: ["create", "update", "delete", "view"],
  editor: ["update", "view"],
  viewer: ["view"]
};

//(1) Get all role names
let rolesNames=[]
for(let role in roles)
{
    rolesNames.push(`${role}`)
}

//Print the role names
console.log(rolesNames)


//(2) Check if editor can delete
let editorDelete=false
for(let perm of roles.editor)
{
  if(perm==="delete")
  {
    editorDelete=true
    break
  }
}

//Print the Result of Delete Permission Editor
console.log("Delete Permission of Editor:",editorDelete)


//(3) Create a flat array of all unique permissions
let allUniquePermissions=[]
for(let role in roles)
{
  for(let permission of roles[role])
  {
    if(!allUniquePermissions.includes(permission))
    {
      allUniquePermissions.push(permission)
    }
  }
}

console.log(allUniquePermissions);

//Print All Unique Permissions
console.log("All Unique Permissions:",allUniquePermissions)

//(4) Add a new role moderator with permissions (immutably)
let updatedRoles=
{
  admin:["create","update","delete","view"],
  editor:["update","view"],
  moderator:["update","delete","view"],
  viewer:["view"]
}

//Print Roles with added Moderator
console.log("Roles with added Moderator:")
console.log(updatedRoles)


//(5) Convert roles object into array of { role, permissionsCount }
let rolesObject=[]

for(let role in roles)
{
  rolesObject.push({role: role,permissionsCount: roles[role].length})
}

//Print Roles Object in form of array of { role, permissionsCount }
console.log("Roles Object in form of Array with Role and Permission Count")
console.log(rolesObject)