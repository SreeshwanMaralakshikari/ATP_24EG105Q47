###Steps to 
1. Generate package.json
2. Create express server
3. Install mongoose and connect to MongoDB Server
    REST API ---> MongoDB Native Driver ---> DB User
    REST API ---> Mongoose ODM Tool ---> DB Server

4. Build USER REST API
    Cred Operations:
    - Create User
    - Real all users
    - Read a User by ID
    - Update a User by ID
    - Delete a User by ID

5. Create Schema and model of the Resource(User)

6. Define Routes

7. Refinements
 - Handling unavailable resources
 - Validating during update
 - Hashing password (bcryptjs)
 - Unique fields
 - Refined version of handling 

//Status Code: 
    //??? Requests
    1. 200 ---> success
    2. 201 ---> created (successful creation)

    //Client Side Requests(Bad)
    3. 400 ---> bad request (client side validation error)
    4. 401 ---> unauthorized resource 
    5. 404 ---> not found error

    //Server Side Request(Bad)
    6. 500 ---> Server Error

8. User Authentication(Login)
    - Submit credentials and get token
    - Public Routes (By Anyone)
        req ---> Public Routes

    - Protected Routes (By Authenticated User Only)
        req ---> middleware(verification) ---> Protected routes(By authenticated users only)
        


