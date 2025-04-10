********************************** Class 3 *************************************

================================== Class 3 =====================================


    1. node REPL - READ, EVALUATE, PRINT, LOOP 
    2. we can see that in terminal like cmd it is very similar to console in browsers but the differnce is instead of Node JS we have browser which is also running 
         V8 engine behind the scenes.
    3. Node JS is JS runtime environment.
    4. Inside Node JS we have V8 JS engine and some super powers and whenever we wrote any piece of JS code, Node JS gave/passed that code to V8 engine and then V8 engine 
         actually executed that code (as V8 engine written in C++ so it converts that code into machine level code so the computer can understand it).

-----------first code of node js------------ 
    5. we can just create a file with the name let say app.js write the code and run it by the command node (file name) in the terminal.
    6. in browser, window is the global object and this also points to the global object and it is given to us by browsers and over here in Node JS we have the global object
         and it is known as global.
    7. setTimeout, setInterval, setImmediate all are given to us by the global object.
    8. so global is not a part of V8 engine as global is outside and it is one of the super powers given by Node JS.
    9. and if we print this in node then it prints an Empty Object and it is not equal to the global object of browsers bcoz there window which is a global object and 
         this we pointing to the same object.
    10. Even if we write window(came when browsers created), this(started to pointing window object in the browsers), self(concept of web workers started self), frames all
          these differnet keywords refer to the same object.  as when node js came in they use the word global and there was a decripisensy as we using js so there has to
           be a common object.
    11. So then open js foundation, decided to make a standard global object in all the runtime environment and globalThis came which refer to all the js runtime environment
         (in all browsers).


================================== Class 4 =====================================


    1. In Node JS application, there is one entry point in the application.
    2. In real life projects, we have multiple files and we want them to execute like here we got app.js which is the entry point of application and another file xyz.js in 
         which there is js code that we want to execute and both the files are not related as they are sepearted files.
    3. xyz is a sepearte module.
    4. Two modules can work together by the require function and it will first print the file which is imported through require function and then the rest of the code.
    5. By default, Modules protects their variables and functions from leaking.
    6. So if we want to use variables or functions of one module to another we have to Explicitly export them.
    7. Whatever we will export through module.exports will be return from require function.
    8. The new file we create is known as a module, and if we run require, we can access the code of different modules. However, we can't access the variables and functions
        directly because modules don't leak them. If we want to use them, we have to export them, and require will return the variable, function, or object that we export.
    9. If we export one variable or function we can write: 
         
         - for exports (best practice to wrap everything in {} whether exporting one or multiple varible or function)
         module.exports = calculateSum; or module.exports = { calculateSum };   
         
         - for imports directly put the name of that varibale or function while importing it.
         const calculateSum =  require("./sum.js");


     10. If we export more than one variable or function we can write: 
         module.exports = {
          x: x,
          calculateSum: calculateSum};  or  module.exports = { x, calculateSum }; (best practice short hand in js)

     11. Other Modules have their own private space is a super power bcoz it protects the variable, as we can use same variable name in different modules unless we importing 
            them there like x in sum.js can do whatever they want to done but as app.js don't need to done anything with x we won't import it and can use the same varibale 
            x also.

     12. Two types of modules (IMPORT/EXPORT) :
     
          - Common JS Modules (CJS)
               - module.exports and require() 
               - by default used in Node JS
               - older way   
               - Synchronous     
               - non strict mode (can declare a variable without using var, let and const)
          
          - ES Modules (MJS / ESM / ES6 Modules)
               - import and export statements
               - by default used in React, Angular
               - newer way (better/standard way of export and import modules)
               - Asynchronous
               - strict mode (compulsory to declare a variable with var, let and const)

     13. Grouping together the same kind of files/ modules and making a single module (index.js) which helps in import and export of modules (FOLDER STRUCTURE).


================================== Class 5 =====================================

     1. Inside Node JS, there is V8 engine and Node JS gives our code to V8 JS engine and it executes our code.
     2. The whole module is wrapped inside a function and then executed and thats the reason why module keep variables and functions private and only way to access them
           outside by module.exports.
     3. Whenever we create a new module and call require function for the file then Node JS takes the code from the file, wraps it into a function and then execute it and 
         if there are any variables and functions which are there inside this function, we cannot directly access it outside as we can only access if module.exports 
         exported it outside.           
     4. When we call require("./path"), All the code of the nodule is wrapped inside a function, which is a special function which is known as IIFE.    
     5. IIFE - setImmediately Invoked Function Expression

          (function () {
               
               All code of the module runs inside here

          })()
     6. When we call require(), Node JS will take all the code and wrap inside an IIFE function and then it will give it to V8 JS engine.     
     7. Why need IIFE?
           - Immediately envokes the code
           - Privacy as it keeps variable and function safe/private
           - It won't interfare the code as it is independent now

           (function () {
               var a = 1000;
           })();t

           var a = 10;
     8. How are variable and function private in different module?
           - bcoz of IIFE and require(statement) as require statement is wrapping the code inside IIFE.

     9. How do you get access to module.exports?
           - When our code is wrapped inside a function, the function has parameters module and require given by Node JS.
           - Node JS passes module as a parameter to the IIFE in which the code is wrapped.
     10. Like there is a module xyz.js now Node JS will create a IIFE and our code will be passed inside IIFE and also Node JS pass module and require as prarameter and then
            it passed to V8 engine and V8 engine executes it and all the variables and function inside the module will not interfere with rest of the other code.

     11. 5 Step Mechanism of require("./PATH")
           - Resolving the Module
                  - It checks whether the module is a local path("./xyz.js") or JSON("./data.json") path or node internal module("node:util").
                  - It checks what type of data is coming whether it is coming from node module, json file or local path and accordingly it resolves the module.
           - Loading the module
                  - File content is loaded according to file type as it can be local, json or node module.
           - Wraps inside an IIFE (Compile)
           - Code Evaluation
                  - In this step, module.exports returns means when we require, it returns the exported variables or functions Whatever we exported. 
                  - Example:-  const {calculateMultiply, calculateSum } = require("./calculate");   
           - Caching (V.V.IMP)
                  - Then the module is cached.
                  - Multiple files requiring multiple modules
                  - xyz.js module require in different modules like multiple.js, sum.js and app.js now, Node caches the require, means the code of the require will only run once.
                  - As, it will not follow all 4 steps after executing once bcoz it is already cached and it will return from the cache.
     12. Libuv library most amazing super power node js has. Eventloop is inside libuv, multi-threading happens with libuv.




================================== Class 6 =====================================

     1. Node JS has an event-driven architecture capable of Asynchronous I/O.
     2. JS is a Synchronous single threaded language.



********************************** SEASON - 02 *************************************

================================== Class 01  =====================================

     1. Waterfall Model (SDLC)
           - REQUIREMENTS                                  
           => by PM - Product/Project Manager - What is Dev Tinder? What features, adueince, differnet scenario, how, tech stack. - PM with Designers
                
                - DESIGN                                   
                => Scenior Engineers/ EM - deciding the tech stack -  Monolith or MicroService architecture - System Design - High Level Design (HLD) - Low Level Design (LLD)
                     
                     - DEVELOPMENT                         
                     => SDE1 / SDE2 - writing Unit Test Cases
                          
                          - TESTING                        
                          =>  SDET - Software Development Engineer Testing - Automation, Manual Testing 
                               
                               - DEPLOYMENT                
                               => Devops Engineer - manages server, deploy - sometimes testers - mainly developers do deployment 
                                    
                                    - MAINTAINANCE         
                                    => Repeat Cycle - some new features or changes
     2. Monolith vs MicroServices
           - Monolith
                - One Big single project which does everything.
                - It has Backend, DB connection, Frontend, code to Authenticate, code to send Emails, code to analytics, Notification.
                - All code written in a single code repository or in a single project deployed on a single way.
           - MicroServices
                - There are multiple small services (Service/project/application ).
                - There can be a micro services only for Frontend or Backend or Authentication or Notification or Analytics or Admin or Creating Dashboard.
                - In large company, there are small small projects handled by different teams and communicating with each other.
                - For example: In uber, when we book a ride there are so many micro services which get active like a micro service which just calculate the fare, other micro
                  service just for Fraud Detection, other team handling just Notifications and other team handling just Invoices/Billings.                                                       
     3. Monolith vs MicroServices Comparison
          -----------------------------
           i. Dev Speed and Code Repo 
           -----------------------------
           In Monolith, there is a single code repository where all the developers are working like 20-30 developers. As, Single Code Repo so Dev Speed is slow bcoz lot of
           developers working on the same code repository, code reviews become slower, it becomes tough for execution also, developmemt Speed becomes slow as when we want 
           to run the application we have to compile the whole project. So, Dev speed comprised a little in Monolith.

           In MicroServices, some developers are working on one service, some other developers on another service. Multiple code repo are there. We can built parallel also as
           in Monolith we can do same but in MicroServices it becomes very easier as frontend team managing their own project and Backend team managing their own backend and 
           they are building things parallely.

           -----------------------------                      
           ii. Scalability 
           ----------------------------- 
           In Monolith, in small company or Small project, Scalability is not a challenge in Monolith but as soon as big company or big project then it becomes very tough to 
           scale Monolith architecture bcoz code repositories growing day by day and maintaing that is a mess.

           In MicroServices, there are small small micro services and its easy to manage and scale those services independently.Like having analytics engine and want to scale
           it we can do it independently. Or having frontend micro service or backend micro service so solving the challenges in that small project and scaling it is easier.  

           -----------------------------
           iii. Deployment 
           -----------------------------

           In Monolith, just need to do a single deployment and whole application is deployed. One small change only in Frontend but need to deploy the whole code on to the 
           server and it is time consuming as it takes lot of process and need to go through testing and it becomes tough in Monolith. 

           In MicroServices, need to deploy each and every application seperately. So if any change in Frontend, we can just directly deploy our frontend application and all 
           other micro services work in the same way. But there can be a mismatch in frontend and backend also if they talking to differnet versions.

           -----------------------------
           iv. Tech Stack 
           -----------------------------

           In Monolith, we are restricted with the tech stack coz of one code base, like there is only one tech stack that decided initially like for frontend if it was made
           in React the whole frontend will be in React only. But if backend is in Java stack, then it will be in Java for all services like sending emails, analytics 
           Dashboard, etc.

           In MicroServices, we can built admin Dashboard with React and student Dashboard on Next js. Analytics can be built on GO, backend in Java for sending emails, but 
           backend can be on Node also for a different micro service like Notification. 

           -----------------------------
           v. Infra Cost 
           -----------------------------

           In Monolith, infra is lower as single project is deployed on a server.

           In MicroServices, it is higher as more the services more the infra required. Multiple servers for frontend and backend. seperate micro services need a seperate 
           server. 

           -----------------------------
           vi. Complexity
           -----------------------------

           In Monolith, if Project is large then Complexity is hard to maintain bcoz of single code base, files etc.

           In MicroServices, if Project is small then Complexity is tough bcoz for small project also we managing multiple services for it but if project is large then
           Complexity is easy.

           -----------------------------
           vii. Fault Isolation
           -----------------------------

           In Monolith, if one line of code is faulty or some piece of code breaks in backend then whole project breaks/crashes.

           In MicroServices, it just crashes only that micro service not the whole project. Like issue in analytics then analytics service will go down not whole project. 

           -----------------------------
           viii. Testing
           -----------------------------

           In Monolith, writing end to end test cases will be easier.

           In MicroServices, we can test the services independently and all the services will have their own test cases but writing end to end test cases is tough.

           -----------------------------
           ix. OwnerShip
           -----------------------------

           In Monolith, there is a central ownership and few people decides how deployment and work will be done.

           In MicroServices, differnt teams take the ownership of different MicroServices.

           -----------------------------
           x. Maintainance and Rewamps
           -----------------------------

           In Monolith, it is tough to do that.

           In MicroServices, its easy to maintain like if want to change whole frontend its easier to do that in MicroServices.

           -----------------------------
           xi. Debugging
           -----------------------------

           It can be tough in both bcoz if something breaks then we have to check the fault.

           In  Monolith, its slightly easier bcoz there is one code base and easy to debugg which file or code etc. 

           In MicroServices, there is blame game also as one mico service team blames other. 
           
           -----------------------------
           xiii. Dev Expierence
           -----------------------------

           MicroServices, as i can break my services to smaller services so they cna be independently updated, scale and deployment cycle.


************ my notes refined By ChatGpt ****************


1. Waterfall Model (SDLC)
     - Requirements
          - Managed by the Product/Project Manager (PM), who defines the product scope, target audience, features, and scenarios. PMs often collaborate with designers to 
          refine the tech stack and outline project goals.
     
     - Design
          - Led by Senior Engineers or Engineering Managers (EM), who decide on the tech stack, architecture type (Monolith or Microservices), and perform System Design.
          Design phases include High-Level Design (HLD) and Low-Level Design (LLD) to clarify the architecture.

     - Development
          - Primarily handled by SDE1 / SDE2 (Software Development Engineers) who write unit test cases and develop the core codebase.

     - Testing
          - Performed by Software Development Engineers in Test (SDET), responsible for automation and manual testing to ensure software quality.

     - Deployment
          - Managed by DevOps Engineers who handle server management, deployment, and infrastructure. Deployment may involve testers but is often primarily done by developers.

     - Maintenance
          - This is an ongoing cycle where new features or updates are introduced, requiring repeated steps from requirement gathering to deployment.

2. Monolith vs. Microservices

     - Monolith
          - A single, unified project containing everything (backend, frontend, database connections, authentication, emails, notifications, analytics) within a single code 
     repository.
          - All code is deployed together, which simplifies deployment but can limit flexibility.
     
     - Microservices
          - A collection of smaller, independent services (e.g., Frontend, Backend, Authentication, Notifications, Analytics).
          - Each microservice operates as a separate project with independent teams, making scaling easier in large organizations.

3. Monolith vs. Microservices: Comparison
     
     - i. Development Speed and Code Repository
          - Monolith: Single code repo for all developers, which can slow down development due to merge conflicts and longer build times.
          - Microservices: Multiple code repos allow teams to work independently, speeding up development as frontend and backend teams can build and deploy in parallel.
     
     - ii. Scalability
          - Monolith: Suits small companies/projects but becomes hard to scale as the project grows.
          - Microservices: Allows independent scaling of services, making it ideal for large projects needing flexible resource management.
     
     iii. Deployment
          - Monolith: Single deployment, but even minor changes require redeploying the entire application.
          - Microservices: Independent deployments mean changes in one service (e.g., frontend) don’t impact others, although version mismatches can cause issues.
     
     iv. Tech Stack Flexibility
          - Monolith: Limited to a single tech stack across the application (e.g., React for frontend, Java for backend).
          - Microservices: Allows diverse tech stacks across services, such as React for one dashboard, Next.js for another, and separate backend languages for different microservices.
     
     v. Infrastructure Cost
          - Monolith: Lower infra costs as only one server is typically needed.
          - Microservices: Higher costs due to separate servers for each service.
     
     vi. Complexity
          - Monolith: Complexity rises in large projects due to a single, monolithic codebase.
          - Microservices: Easier for large projects but overkill for small projects, where managing multiple services adds unnecessary complexity.
     
     vii. Fault Isolation
          - Monolith: Failure in one area can impact the entire application.
          - Microservices: Issues are isolated to the specific service, minimizing overall impact.
     
     viii. Testing
          - Monolith: Easier to write end-to-end tests as there’s a single codebase.
          - Microservices: Independent tests for each service simplify testing but make full integration testing more complex.
     
     ix. Ownership
          - Monolith: Centralized ownership, with few decision-makers overseeing the project.
          - Microservices: Different teams own different services, allowing for distributed responsibility.
     x. Maintenance and Revisions
          - Monolith: Harder to manage large-scale updates and rewrites.
          - Microservices: Easier to modify specific parts, like a frontend revamp, without impacting other services.
     xi. Debugging
          - Monolith: Easier, as there’s one codebase to check for issues.
          - Microservices: Complex, with potential inter-team “blame game” as faults can cross service boundaries.
     xii. Developer Experience
          - Microservices: Greater flexibility, as services can be broken into smaller parts, making it easier to update, scale, and deploy independently.

================================== Class 02  =====================================

     1. Features in DevTinder
           i. Create an account
           ii. Login
           iii. Update your profile
           iv. Feed page - explorer
           v. Send connection request
           vi. See our matches
           vii. See the request we've sent/received
           viii. Update your profile
     2. Product requirements given by PM. PM collabarats with Design team to Design the UI mock.
     3. HIGH LEVEL DESIGN (HLD)
           A. Tech Lead/Engineering Manager will read these requirements and will figure out HLD of the product like what micro services will be built, security practices 
           use(JWT token), how to store the password, how to encrypted and decrypted, how to check for validation, how will user Authenticate, how will be the database be,
           what database will be used, how we will Design the database, how we will Design the api etc.
           B. Tech Planning
               - 2 MiccroServices 
                   - Frontend(React) and Backend (Node js and MongoDB)
     5. LOW LEVEL DESIGN (LLD)
           A. In DB design, we decides collection of documents like what kind of collection will be there.
               - Collection
                    i. User => firstname, lastname, email id, password, age, gender etc
                         - We also discuss in the DB design that if it is a first name it should be a string, with min and max length.
                         - We discuss and decide the datatype of the fields in the document like age should be a number.
                         - How will uh store the password or what should be the values in gender.
                         - When we have such type of model where one user can send connection requeet to lot of other user then we have to store that relationship information
                          also means need one more collection.
                          - Will not store in user collection bcoz it is used to store user data not the data of their connections/relationships.
                    ii. ConnectionRequest => From user id, To user id, status (pending/accepted/rejected).
                         - Now if we think, here we decided that there can be 3 status that A can send request to B and it can be in pending status then either it will be
                          accepted or rejected but there can be more than 3 status as well. Like pending status when A will be right swipe but what if A will left swipe it,
                           that can be a 4 status named as Ignored, even there can be a one more status i.e. 5 status named Blocked if A blocks.
           B. In API Design, there are HTTP method that we use for RESTful API i.e. GET, POST, PUT, PATCH and DELETE.
               - In some comapnaies they create api's like /getProfile, /updadeProfile etc. but in companies where they follow good nomenclature they use it like Get/profile 
               to get the data of the profile, Post/profile to send the data to the profile.
               - In DevTinder, we making CRUD Operations like 
                 - Post/signup
                 - Post/login
                 - Get/profile
                 - Post/profile
                 - Patch/profile
                 - Delete/profile
                 - Post/sendRequest => Ignore or Interested
                 - Post/reviewRequest => Accept or Reject
                 - Get/requests 
                 - Get/connections

************** HOME WORK **************

1. WHAT IS REST API?

A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions that allows software applications to communicate
with each other over the web. REST is an architectural style used primarily for building web services, and it defines how resources, such as data or functions, can be 
requested or modified by other applications.

Here's an overview of how REST APIs work:

1. Resources and Endpoints
In REST, everything is considered a resource. A resource could be anything you want to expose via the API, like a user, product, or article. Each resource is identified by a
URL (Uniform Resource Locator), called an endpoint.
For example, an API endpoint like /users could be used to interact with user data.

2. HTTP Methods
REST APIs commonly use HTTP methods to define the type of action requested on a resource. The primary methods are:
GET: Retrieve data (e.g., get a user’s information)
POST: Create new data (e.g., add a new user)
PUT or PATCH: Update existing data (e.g., modify user information)
DELETE: Remove data (e.g., delete a user)
These methods help keep the API simple and intuitive by using standard web protocol actions.

3. Statelessness
REST APIs are stateless, meaning that each request from a client to the server must contain all the necessary information for the server to fulfill the request. No client 
context is stored on the server between requests, which simplifies server design and allows it to scale more easily.

4. Data Formats (Usually JSON)
REST APIs commonly use JSON (JavaScript Object Notation) to send and receive data because it’s lightweight and easily readable by humans and machines. However, other formats 
like XML can also be used.
When a client requests data, the server responds with the resource in JSON format, making it easy to integrate with frontend applications.

5. Standard HTTP Responses
REST APIs use standard HTTP status codes to indicate the result of a request:
200 OK: Successful request
201 Created: Successful creation of a resource
400 Bad Request: Incorrect request format
401 Unauthorized: Authentication required
404 Not Found: Resource not found
500 Internal Server Error: A general server error

Example
Imagine a REST API for a library system where you want to manage book records:

GET /books – Retrieves a list of all books.
GET /books/1 – Retrieves information about a specific book with ID 1.
POST /books – Adds a new book to the library.
PUT /books/1 – Updates the information for the book with ID 1.
DELETE /books/1 – Deletes the book with ID 1.
Each endpoint and method works consistently, allowing different applications to communicate seamlessly with the library system.

In essence, a REST API is a way of building APIs that are intuitive, reliable, and easy to interact with, especially suited for web-based applications and services.


2. Differnce between put and patch api?

The difference between PUT and PATCH in REST APIs lies in the way they update resources:

i. PUT:

Full Update: The PUT method replaces the entire resource with the data provided in the request. If fields are omitted in the request, they may be set to default or empty 
values.

Idempotent: Multiple identical PUT requests have the same effect as a single request.

Example: If you have a user resource with fields like name, email, and age, and you send a PUT request to update just name, you must still include email and age in the 
request; otherwise, those fields might be reset.

PUT /users/1
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 25
}

ii. PATCH:

Partial Update: The PATCH method applies a partial update to a resource, modifying only the fields specified in the request without affecting other fields.

Idempotent: Like PUT, PATCH is also idempotent; sending the same PATCH request multiple times produces the same result.

Example: With PATCH, you can send only the name field if that's the only thing you want to update, leaving other fields like email and age unchanged.

PATCH /users/1
{
    "name": "John Doe"
}

Feature	      |   PUT	                            |     PATCH
Update Type	 |   Full (replaces entire resource)  |     Partial (updates specified fields)
Idempotent	 |   Yes	                            |     Yes
Usage Scenario	 |   Replace an entire resource	   |     Update a specific field(s) of a resource

In short: Use PUT when you want to replace an entire resource and PATCH when you want to modify specific fields.


================================== Class 03  =====================================

    1. For Creating a project, create a folder, open it in vs code and in terminal do npm init to initliase it and package.json file will be created then create src folder
    and inside that app.js file. Now, npm i express to install express in the project and then node modules folder and package-lock.json file will be created.
    2. Node modules folder contains all the code of install packages like here we installed express so it took all the code of express and put it in node modules folder.
    3. Also, in package.json npm added express as the dependency of our project.
    4. Other folders than express are there in nod modules bcoz express also have package.json file and some dependencies so it installed them also and if those dependencies
    of express have some dependencies then it will also be installed in node modules.
    5. As, we have express version as ^4.21.1 which is equals to (major.minor.patch) so as express js is a library and it is constantly updated as lot of devlopers working 
    on it. As we using express as 4.21.1 so now will see how it updates.
         - patch => It is for small change or small bug fix and push it. version will be 4.21.2
         - minor => It is for minor change like pushing some features inside express and those features are backward compatible means any older version users won't face any 
         issues due to minor change in version. version will be 4.22.2
         - major => It is for major change like express changing something internally which will effect any people who using 4.x.x as it is breaking change and it is not 
         backward compatible as updated version will be 5.20.3   
     6. When we use carat ^ like ^4.21.1 it means our project will automatically be updated if any of the new version comes in 4.x.x series means if there is any patch or 
     minor change then it automatically update our project.
     7. If we don't use carat or tilde then it means it will be on the version in which it was initially created. Like 4.21.1
     8.Using ~4.21.1 means that your project can automatically update to any new patch version within the specified minor version. This means it will only allow updates that
     are bug fixes and do not introduce new features. Like, it would allow updates to 4.21.2, 4.21.3, etc., but it would not allow updates to 4.22.0 or any higher major 
     version like 5.0.0.
     9. package-lock.json will tell the exact version of the package and in package.json it tells the version that we allowed not the exact version.



************** HOME WORK **************

    1. What are Dependencies?
    Dependencies are external libraries or modules that a project needs to function. When a project relies on certain packages, we declare them as dependencies so that 
    they’re automatically installed and included when setting up the project. In Node.js projects, dependencies are listed in the `package.json` file under `"dependencies"`
    or `"devDependencies"` sections.
    
    - Dependencies: Listed in the `"dependencies"` section, these are packages required for the project to run in production.
    - DevDependencies: Listed in the `"devDependencies"` section, these are only needed during development, such as testing frameworks or build tools, and not necessary
    in production.

    2. What is the Use of `-g` in `npm install`?
    The `-g` (global) flag in `npm install -g <package-name>` installs the package globally, meaning it’s available system-wide rather than just in the current project 
    directory. 

    - Global Installation (`-g`): The package can be used anywhere on the system, typically for command-line tools like `nodemon` or `create-react-app`.
    - Local Installation (without `-g`): The package is installed only for the specific project and will be found in the project’s `node_modules` folder.

    3. Difference Between Caret (`^`) and Tilde (`~`)
    The caret (`^`) and tilde (`~`) symbols are version specifiers for dependencies in the `package.json` file. They define the range of versions that 
    npm will install, controlling which updates are allowed.

    - Caret (`^`):
       - Allows updates to the **minor** and **patch** versions, but locks the major version.
       - Example: `^4.2.1` allows updates to `4.3.0`, `4.9.5`, etc., but not `5.0.0`.
       - It is commonly used to provide some flexibility for newer features and bug fixes while avoiding potential breaking changes.

    - Tilde (`~`):
       - Allows updates only to the **patch** version, locking both the major and minor versions.
       - Example: `~4.2.1` allows updates to `4.2.2`, `4.2.5`, etc., but not `4.3.0`.
       - Useful when you want the smallest range of updates, generally just bug fixes.
       
       In summary:
       - `^` (caret)**: More flexible; allows updates within the same major version.
       - `~` (tilde)**: More restrictive; allows updates within the same minor version only.



================================== Class 04  =====================================

    1. We can delete node modules as whenever we do npm i it will install the node module again as per the dependencies in package.json. Hence, we don't push node mpdules to
    the git.
    2. To ignore certain folders or files, like node modules we can create a file called gitignore and inside that we can give path/name of the files that we want it to 
    ignore.
    3. Also, whenever we use routes like we did /hello then it matches the exact path /hello so even if we do /hello/1 or /hello/test it will show the same output of hello
    only unless we specifically define routes for /hello/1 or /hello/test and thats why when we used / it showed same output even after changing the link to /hello or /test.
    4. In other words, /hello will match additional segments (like /hello/1) unless we restrict it, so that’s why /hello, /hello/test, and /hello/1 might return the same 
    response unless specifically defined otherwise.
    5. / is the root route, handling requests to the very base URL. /hello is a specific route, and /hello/anything would still match /hello if the router is set to allow
    path matching with additional segments.
    6. The order of writing routes in the code is very very important. 
    7. As, now if we shift / route at last after /hello and /test then all three works fine. Same if we
    created a route /hello/2 and if it is after /hello then it will show same output in both /hello and /hello/2 but if it is befoer /hello then both will show their 
    resprective output.    
    8. in Postman, just made a new workspace for new project and inside that we can create new collection (collection here is just collection of api) while click on new we
     can choose methods like http and then test API calls.
    9. When we use app.use("/hello), then if we do GET or POST request in postman to test api it will show the same output for both as it matches all the HTTP method to api
    call. 
    10. Use http methods with app seperately like app.get("/user") so now this method will only match the get api calls to the route "/user" as it will only handle GET call to
    "/user" means it will only show the data of get method or if we do app.post("/user") so it will only handle POST call to "/user".
    11. If we using HTTP methods with app seperately like app.get("/user") or app.post("/user") but above all of them if we use app.use("/user") then it will again show same
     result/output for all the methods bcoz all the routes will handled over "/user" whether it is a GET or a POST method bcoz order matters as dicsused earlier.
    12. Advance Routing
          i. if we put ? after a letter then that letter above ? will be optional.
               - app.get("/ab?c")
               - here it will be work for /abc and /ac also as b is optional.
          ii. if we put + after a letter then that letter above ? can be used multiple times.
               - app.get("/ab+c")
               - here it will be work for /abc and /abbc or /abbbbbbbbbbbbbbbbbbbc.
               - but won't work for /abbbbbbbcc as pattern needs to be follow i.e. a and c has to be in last and we can add as many as b we want to add.
          iii. if we put * between two letters then we can add anything in between those two letters.
               - app.get("/ab*cd")
               - here it will be work for /abcd and /abAnythingYouCanADDcd. 
          iv. a. if we group things together like keeping two letters in a bracket () and then using ? then those letters above ? in bracket will be optional.
               - app.get("/a(bc)?d")
               - here it will be work for /abcd and /ad as bc become optional.
              b. if we group things together like keeping two letters in a bracket () and then using + then those letters above + in bracket can be used multiple times.
               - app.get("/a(bc)+d")
               - here it will be work for /abcd and /abcbcbcbcbcd as bc become optional.
          v. we can also use regex instead of a string like /a/
               - app.get(/a/, (req, res) => {})
               - if a comes anywhere it will work like /a or /cab or /can
               - it won't work for /b or /cid
          vi. if we use /.*fly$/ then anything can be in starting and it ends with a fly it will work.
               - app.get(/.*fly$/, (req, res) => {})
               - here it will work for /butterfly or /fly or /dragonfly or /seeWhatUhSeefly.
               - it won't work for /dragonfly1 or /butterflyInSky
     13. How to get Query parameters/params in route handler like /user?userId=101 or /user?userId=101&password=testing
          - We can get it by req.query 
          - output will be {userId: '101', password: 'testing'}
     14. How to make routes dynamic or dynamic api's like  /user/100 or /user/100/Saurav/testing
          - colon : means dynamic routes just add : after / like /user/:userId or  /user/:userId/:name/:password
          - We can get it by req.params
          - output will be {userId: '101'}        
                


************** HOME WORK **************



    1. Difference Between package.json and package-lock.json?
         - package.json
              - This file contains a general list of the project’s dependencies along with their versions (often using version ranges).
              - It specifies information like project name, version, author, scripts, and dependencies (dependencies and devDependencies).
              - The versions listed in package.json allow some flexibility. For example, "express": "^4.17.1" means that npm can install any compatible version like 4.17.2 
              or 4.18.0.
          
         - package-lock.json
              - This file locks the specific versions of all installed dependencies, including sub-dependencies (dependencies of dependencies).
              - It captures the exact version numbers that were installed during the last npm install command, providing a detailed "snapshot" of the dependency tree.
              - Ensures that the project will install the same dependency versions each time, providing consistency across different environments (development, staging, 
              production).
     2. Should You Push package-lock.json to GitHub?
          - Yes, you should push package-lock.json to GitHub.
          Here’s why:
          - Consistency: package-lock.json ensures that all collaborators and environments use the exact same versions of dependencies. Without it, npm install could install 
          slightly different versions due to the version ranges in package.json, potentially causing bugs and inconsistencies.
          - Faster Installations: When package-lock.json is present, npm can skip steps in dependency resolution, making installations faster and more efficient.
          - Security: Since it locks dependencies to specific versions, package-lock.json can help prevent unintentional updates that might introduce vulnerabilities.
          
          In short, package-lock.json is essential for reliable, consistent dependency management, which is why it should be included in version control.

     3. differnce between query and params?
          - In web development, both query and params (also called route parameters) are used to send data in URLs, but they are used in different ways and have different 
          formats:

          I. Query Parameters
               - Format: Key-value pairs appended to the URL after a question mark (?).
               - Example URL: https://example.com/search?category=books&sort=asc
               - Access in Express.js: Using req.query.
               - Use Case: Query parameters are generally used for optional data or filters. They allow passing multiple values without changing the URL structure and are 
               often used for searches, filters, pagination, sorting, etc.

               // Example in Express.js
               app.get('/search', (req, res) => {
                    const category = req.query.category;  // 'books'
                    const sort = req.query.sort;          // 'asc'
                    res.send(`Category: ${category}, Sort: ${sort}`);
                    });

          II. Route Parameters (Path Parameters)
               - Format: Part of the URL path itself, defined with a : followed by the parameter name in the route.
               - Example URL: https://example.com/products/12345
               - Access in Express.js: Using req.params.
               - Use Case: Route parameters are used for required values that identify specific resources or entities, like an item ID, user ID, or product category. 
               They make the URL cleaner and more readable when pointing to specific items or resources.

               // Example in Express.js
               app.get('/products/:id', (req, res) => {
                    const productId = req.params.id;  // '12345'
                    res.send(`Product ID: ${productId}`);
                    });

          Key Differences
               - URL Structure: Query parameters are added at the end of the URL with ?, while route parameters are part of the URL path itself.
               - Use: Query parameters are usually optional and used for filtering or sorting data. Route parameters are typically required and represent specific entities or
                resources.
               - Data Access: Query parameters are accessed with req.query and route parameters with req.params in Express.js.          



================================== Class 05  =====================================

** Here, we learned about route/request handlers & their multiple examples how code executes, then Middlewares & authentication before sending response & Error handling.

     1. If we use app.use then it can handle any type of method whether it is GET, POST, PUT, PATCH, DELETE.
     2. But if we use app.get we can handle the GET request or if we do app.post then it can handle the POST request.
     3. If we don't send any response means we don't use res.send then it will go in an infinite loop of sending request bcoz we are not sending any response from the server.   
     4. Route handler is the callback function (req, res) => {} after route ("/user") in app.use or app.get or app.post etc. 
     5. Now, if we write console.log in Route Handler then it will print console log but still it will go in an infinite loop of sending request bcoz we are not sending any
     response from the server as the request from postman came to the server and it went inside the Route Handler and printed the log on the console and didn't do anything
     just hanging around there so we have to send the response back.
     6. One route can have multiple route handler.
          - route => "/user", route handler => (req, res) => {}
          - app.use("/user", (req, res) => {
                    console.log("Handling the route user 1!!");
                    res.send("Response 1");
                    },
                    (req, res) => {
                         console.log("Handling the route user 2!!");
                         res.send("Response 2");
                         });
     7. If we now hit the get request it will send the response "Response 1" but if there is no res.send("Response 1") then it will again go in an infinite loop of sending 
     request as it won't get further and print "Response 2" coz node js or express won't work like that automatically.
     
     8. But there is one more parameter that is next and if we use that prarameter and call the next() then it will go to the second Route Handler and print "Response 2".
     
     9. So, the request goes to the server and server checks it is the request fo "/user" and it goes to the first route handler and prints the console log and no response 
     is sent back and we just called the next() function given by Express js so now it will go the next route handler and print console log and response was send back.
     
     10. If response is sending from first route handler but also we calling the next() function then request will go to the first route handler and print console log and 
     response will be sent back and the remaining code also execute as the route handler function is executed in Call Stack and JS waits for none so it will also execute 
     next() function also called and when we call next function it will go to the second route handler and print console log but when it try to send the response back from 
     the same URL it throws an error bcoz we have already sent the response back to client and We cannot change the request as a TCP connection was made b/w client and 
     server and it opens up the socket connection and sends the data back and closes the connection and the connection is lost but on the server we still trying to send 
     more response. 
     
     11. as per TCP, For one request one socket connection is made and once we go the response back from the server that connection is closed now here we got the response 
     from first route handler and connection is closed but as next() got executed so it went to second route handler too and trying to send the response back to the 
     coonection but there is no connection. NEVER WRITE CODE LIKE THIS AS IT THROWS ERROR.
     
     12.When there are 2 route handler and in both 1st and 2nd route handler there is res but using next() before res of 1st route handler so it executes 1st route handler 
     and prints console log then goes to 2nd route handler and prints console log & res of 2nd route handler and then try to execute res of 1st route handler and throws error
     bcoz connection is lost and on the server we still trying to send more response to the client when request is already fullfilled.     
     
     13. When there are multiple (4) route handlers and 1st route handler doesn't have res but using next() and rest route handler has res but are not using next() it will
     print console log of 1st and 2nd route handler and res of 2nd route handler and there will be no ERROR bcoz as 1st route handler doesn't have res like previous example
     as it just have the console and it prints it but as there is next() so it went to 2nd route handler and prints the console and send the res back also and now in 2nd 
     route handler there is no next() so it won't go further down hence no ERROR.    
     
     14. When there are multiple (4) route handlers & none of them have res but using next() in every route handler & it will print console log of every route handler but
     throws an ERROR as in last route handler (4th) there is next() so express exprect another route handler but there is no route handler.
     
     15. When there are multiple (4) route handlers & none of them have res but using next() in every route handler except last route handler (4) & it will print console log 
     of every route handler as it is not throwing any ERROR but its Hanging BCOZ not handling route handler as it keep sending request to the server and not getting any 
     response.
     
     16. CORRECT WAY => When there are multiple (5) route handlers & none of them have res and using next() except last one (5) &it will print console log of every route 
     handler and res of last route handler(5) as express says make as many as route handlers but at the end the response should be send.

     17. We can also wrap all the route handlers in an array or some of the route handlers in an array.
          - app.use("/user", [rH , rH2, rH3, rH4, rH5]); OR app.use("/user", [rH , rH2] rH3, rH4, rH5); OR app.use("/user", rH , rH2, [rH3, rH4] rH5);
          - all of them work in the same way
     18. We can write the multiple routes like this also it is exactly the same thing
          - app.use("/user", (req, res, next) => {
               console.log("Handling the route user!!");
               next();
               });
               
          app.use("/user", (req, res, next) => {
               console.log("Handling the route user 2!!");
               res.send("2nd Route Handler");
               });
     19.  We can write the multiple routes like this also but order matters alot as here it went to the 1st route handler print the console log and send the response back 
     and didn't even go the 2nd route.
          - app.use("/user", (req, res, next) => {
               console.log("Handling the route user 2!!");
               res.send("2nd Route Handler");
               });
               
          app.use("/user", (req, res, next) => {
               console.log("Handling the route user!!");
               next();
               });
     20. It also expects the response in last route handler and if there is next() then it expects the another route handler.
     21. route handlers is the function that actually handling the route and sending the response back but these function that we put in the middle are called as Middlewares.
     22. A GET request comes in to "/users" as soon as it comes to express it goes and check for whether we have this method and route matching somewhere and it will go 
     through the chain of Middlewares and then it will handle the response.
     23.  How Exprees js works? 
          - GET /users => It checks all the app.xxx ("matching routes") functions, and try to execute them one by one till it gets the response back to the server.
          - Whenever a request comes to express js server, the job of express js server is to go one by one from top to bottom to all the route handlers and try to send the
          response back and if does not find the matching URL and unable to send the response back it will just hangs up.
          - It checks all the functions and send the response back and if any of them sending the response back and it will go no further.
          - Sending a request to the express server it will try to go one by one to these Middlewares till it reaches a function which actually sends the response back and 
          that function is known as request/route handler and all of the functions that goes through in b/w are knows as Middlewares.
          - Middlewares are normal functions only as we call them Middlewares bcoz these are been called one after the other in the middle of the request/method chain.
     24. What is Middlewares and Why we use them or Why do we need it? 
          - as we have let say 2 admin api's before sending the response we need to validate them so authentication is needed as check if the request is Authenticated as it 
          is actually made by admin, as we need to validate the token and if token is invalid we will not send the data back.
          - But if we check the token for authorization in each api then we have to write the logic again and again and it will be very lengthy.
          - For making all the admin api's authorization, we can make a middleware. 
          - Generally, Middlewares are written using app.use bcoz we want our middleware to be used for GET, POST, PUT, PATCH and DELETE requests.
          - But we can write middlewares specifically for all the GET or POST requests also.
          - now if we wrote the middleware for all the requests coming to "/admin" and put that on top of all the middlewares/route handlers so all my requests like 
          "/admin/getAllData" or "/admin/deleteUser" or any request start with "/admin" will go through the top middleware i.e. "/admin" but not for other routes like "/user" 
          and here we can write the code for authentication.
          - It will make our code clean and readable and there will be no repeated code also. 
          - For more cleaner code we can make a differnt folder middlewares and inside that make auth file in which we can write authentication code for admin and export that 
          from there so it will make our code more cleaner and readable.
          - Instead of writing
          app.use("/user", userAuth);
          we can directly write it 
          app.get("/user", userAuth, (req, res) => {
               res.send("User Data Sent");
               });
          as there is only one route handler for "/user" so we can directly also write the middleware as it will go to the middlware in auth.js and check the autorization 
          and once autorized then only reach here to this route handler.
          - We also made an api for User login where we don't need any authentication so we can just simply write the code and no need to add the middleware. So by 
          middlewares we can customize lot of things.
     25. We should write all our code using try and catch so we can catch the erros too.
     26. When we get error due to wrong js code or DB unable to fetch the data and we try to write all of our code inside try and catch but if we don't use it and there is error
     so it throws some random error and expose alot of details also and thats not a good way to handle it. 
     27. To handle all our application Erros we can create another route handler as we should write all our code means everything inside try and catch as its a best way of 
     doing it but still if there are some unhandled errors, some code which is still throwing some error so we can handle it gracefully is by creating another route hander
     with error parameter.
          - app.use("/", (err,req, res, next) =>{})
          - it matches all our routes 
          - error(err) should be the first prarameter as order of parameter is important
          - as we don't want to expose our code with random msgs like user is not defined, variable is not defined going to the client
          - thats also a middleware  


     Theory question 
     how express works 
     how middleware works
     what is a middleware        

     
************** HOME WORK **************

1. differnece between app.use and app.all in express?

In Express.js, `app.use` and `app.all` are both methods to handle requests, but they have different purposes and behavior:

### 1. `app.use`
- **Purpose**: `app.use` is primarily used to set up middleware functions, which are executed every time a request is received, regardless of the HTTP method (GET, POST, PUT, etc.) or specific path.
- **Usage**: Often used for global middleware (e.g., logging, parsing JSON, or handling CORS).
- **Path Matching**: If a path is provided, `app.use` will match any path that starts with the specified path.
  - For example, `app.use('/api', ...)` will match requests to `/api`, `/api/users`, `/api/products`, etc.

#### Example
```javascript
app.use('/api', (req, res, next) => {
  console.log('API request received');
  next();
});
```
In this case, every request to a path starting with `/api` will execute this middleware.

### 2. `app.all`
- **Purpose**: `app.all` is used to handle all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific route. It's mainly used for defining route-specific middleware that applies to all request methods.
- **Usage**: Typically used for applying some action on all methods for a specific route.
- **Path Matching**: `app.all` only matches the exact specified route and does not include subpaths.

#### Example
```javascript
app.all('/api/users', (req, res) => {
  res.send('This handles any HTTP method for /api/users');
});
```
In this case, any request to `/api/users` with any HTTP method will be handled by this route.

### Summary of Differences
| Feature           | `app.use`                                  | `app.all`                                   |
|-------------------|--------------------------------------------|---------------------------------------------|
| Purpose           | Middleware for requests across paths       | Route handling for all HTTP methods         |
| Path Matching     | Matches paths that start with the path     | Matches only the exact specified route      |
| HTTP Methods      | Handles all methods by default             | Applies to all HTTP methods explicitly      |
| Typical Use Cases | Logging, authentication, parsing requests  | Defining route-wide behavior                |


================================== Class 06  =====================================

** In this episode we learned about how to connect mongodb to application by using mongoose and then about how to make schemas, models and push them to DB.

     1. Cluster =>  We create cluster for every single project.
          - Inside the cluster, there can be multiple database.
          - Inisde the database we can create differnt collections like User which will have all user data, admin which will have all admin data etc.
          - Collection is group of documents(objects) and in documents we have fields(key value pair).
     --------------  SETTING UP DATABASE --------------------
     2. install mongoose - npm i mongoose     
     3. Create a config folder where will keep every config files there. Now create database.js file and inside that import mongoose.
          - const mongoose =  require('mongoose');
     4. Now, connect mongoose to the Cluster (database).
          -  mongoose.connect("Database Connection URL");
     5. But doing it like this is not the good way as the good way is to wrap this in an async function and call an await as mongoose.connect returns a Promise and tells that
     whether the connection was successfull or not.
          - const connectDB = async () => {
               await mongoose.connect("Database Connection URL");
          };
     6. Now, we can call this function and use .then() for happy case and .catch() for catching errors.
          - connectDB().then(() => {
               console.log("Database connection estabilished..");
          }).catch((err) => {
               console.log("Database cannot be connected!!");
          });
     7. the whole code For Now in database.js looks like this:
          
          - const mongoose = require("mongoose");
          
          const connectDB = async () => {
               await mongoose.connect(
                    "mongodb+srv://sauravbedwal1234:LAxU7xXSS9gO09WJ@namastenodesauravbedwal.vwabz.mongodb.net/"
                    );
               };
               
               connectDB()
               .then(() => {
                    console.log("Database connection estabilished..");
                    }).catch((err) => {
                         console.log("Database cannot be connected!!");
                         });
     8. Now as we want to connect the app to the database, we have to import database file into app.js  bcoz we running app.js file.
          - require("./config/daatabase);
          - path only give o=when transferring the files otherwise if its a node or npm package have to do require("PACKAGE NAME).
     9. Also, through mongo.connect we connected to the cluster not the database as inside cluster there can be multiple daatabase and to connect to a specific database,
     we can put the database name at the last of the URL.
          - mongoose.connect("URL/devTinder");
    10. But there is a PROBLEM as THIS IS NOT THE BEST WAY TO CONNECT TO THE DATABASE as Server is built first and started listening/accepting the requests and yet database
    is not connected as application connected to the database later on.
         - console log :  Server is successfully listening on port 7777...
                          Database connection estabilished..
         - user hitting our api but database is not connected.
         - CORRECT WAY => First connection to the database and then listen to the server.
     11. How to connect to the mongoose DATABASE?
          -Now, the CORRECT AND FINAL WAY is to export connectDB function and import it to the app.js file and in .then() function after the database connection is 
          established we can listen the server.
          
          - database.js
          
          const mongoose = require("mongoose");
          const connectDB = async () => {
               await mongoose.connect(
                    "mongodb+srv://sauravbedwal1234:LAxU7xXSS9gO09WJ@namastenodesauravbedwal.vwabz.mongodb.net/"
                    );
                    };
                    
                    module.exports = connectDB;


          - app.js

          const express = require("express");
          const app = express();
          
          const connectDB = require("./config/database");
          
          connectDB()
          .then(() => {
               console.log("Database connection estabilished..");
               app.listen(7777, () => {
               console.log("Server is successfully listening on port 7777...");
          });
          }
          ).catch((err) => {
               console.log("Database cannot be connected!!");
               });
          - Things can work perfectly fine with the old style also when in database.js only we were calling the connectDB() function and doing .then() and .catch() there in
          happy cased but right way is not this bcoz if database is not connected and app started listening to the api request on server.
     12. In DB design, there will be different collections and one of them is User collection means inside the database we have the collection of all the users and before
      creating a collection a schema of user is required.
          -  Schema => - It is an identity for that collection documents.
                       - like if we create User Schema this basically means defining a user.
                       - Creating a Schema means what all thing will be store in this user collection, what can an user have.
                       - User can have firstName, lastName, email id, password etc. and all of that will be stored inside user collection and for creating that we would 
                       need a Schema.
                       - Schema tells what all information about the user will be stored in the dabtabase and what this user schema can store or hold and these are the 
                       fields that can be present inside the user collection and what is the type of data these fields hold.
          - Model => Creating a model as we modeling the database.
     13. Create models folder and inside that user.js file to create schema.
          - create userSchema as schema is a function on top of mongoose and pass the object over here and inside object we can pass all the parameters like firstName, 
          lastName, emailId, password, age etc that define a user. 
          - create model and model also a function on top of mongoose and pass name of the model and schema and export it.
     14. When we create a mongoDB database, we create collection inside it, that collection will holds some data so this is like a User class and then we will create small
     new instances of that class whenever the user will come in it will be a new type of instance of that model. Schema defines the model, and model is like a class which
     will create its own instances. Like an user came in Saurav, as it is of type of user so it will go into the user collection. First we create a schema then create a 
     model out of it and now with this schema we will create new new instances. if we want to add a new user, we will create a new instance of this model and put it into the
     database.
     15. Now will create api's and first api will create is POST api.
          - We created a POST route handler and there for now put the dummy data of user i.e. an userObj and want to save this into user collection and for that we will 
          create new instance of our model i.e. User and we will add the database to the model and save that instance.
          - impor/require User model
          - now we will create a new instance, define User and pass userObj or can directly write the user information to the new instance.
          - then we will save it to the database by user.save() and it returns a promise so we should use the route handler function as an ASYNC AWAIT function.
          - Creating a new instance of the User model and passing the data and the new instance comes inside the user variable and when we do user.save() it
          save the data into the database.
          - after saving the user send the response back.
          - always write the code in try and catch so it also catch if any error occurs and handle the responses appropriately.
     16. MongoDB itself create an unique Id and __v for each document. __V is there to maintain the version of the document. Don't play with these let MongoDB handle it.


************** HOME WORK **************

1. what is Schema and Models in mongoose?

In Mongoose, **Schemas** and **Models** are core concepts used to structure and interact with MongoDB data in a more organized, schema-based way. Here’s how they work:

### 1. Schema

- A **Schema** in Mongoose defines the structure and rules for documents within a MongoDB collection. It’s essentially a blueprint for each document, specifying the fields,
 data types, and any constraints or validation required for the data.
- **Data Types**: Common types in Mongoose schemas include `String`, `Number`, `Date`, `Boolean`, `Array`, `ObjectId`, and more.
- **Validation**: You can define validation rules (e.g., required fields, min/max values) directly within the schema to enforce data integrity.
- **Default Values**: Schemas allow you to define default values for fields if they’re not provided.

#### Example Schema
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },          // name must be a string and is required
  email: { type: String, required: true, unique: true },  // email must be unique and required
  age: { type: Number, min: 0 },                    // age must be a non-negative number
  createdAt: { type: Date, default: Date.now }      // default value is the current date and time
});
```

This schema defines the structure for a `user` document, including required fields (`name`, `email`), unique constraints (`email`), and default values (`createdAt`).

### 2. Model

- A **Model** in Mongoose is a wrapper for the schema and provides an interface to interact with the MongoDB database.
- Models allow you to perform operations such as **CRUD** (Create, Read, Update, Delete) on the documents within a collection. When you create a model, Mongoose 
automatically creates a MongoDB collection (if it doesn’t already exist) with the pluralized name of your model.
- Models are created by passing a schema into `mongoose.model()`. 

#### Example Model
```javascript
const User = mongoose.model('User', userSchema);
```

Here, `User` is a Mongoose model based on the `userSchema`. Using this model, you can create and manage user documents in MongoDB, like so:

#### Example of Using the Model
```javascript
// Creating a new user document
const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

// Saving the user to the database
newUser.save()
  .then(() => console.log('User saved!'))
  .catch(error => console.error('Error saving user:', error));

// Finding users
User.find({ age: { $gt: 18 } })
  .then(users => console.log('Users found:', users))
  .catch(error => console.error('Error finding users:', error));
```

### Summary
- **Schema**: Defines the structure, types, and validation rules for a document in a collection.
- **Model**: An interface that provides methods to interact with the database (query, save, update, delete) based on the defined schema.

In short, a schema is the blueprint, and a model is the tool you use to interact with MongoDB based on that blueprint.

2. so i can say models are the group of different schemas like how the database model will be?

Not quite—models in Mongoose are not typically a "group" of different schemas. Instead, each **model** in Mongoose corresponds to a **single schema** and, by extension, 
to a **single MongoDB collection**. 

Here’s a clearer way to understand it:

1. **Schema**: Defines the structure for documents within a single collection (e.g., the `userSchema` for a `users` collection). You use a schema to enforce data types, 
validation, and structure for that collection.

2. **Model**: Is built from a schema and provides an interface for CRUD operations on the specific collection that the schema defines. For example, if you have a 
`userSchema`, you create a `User` model from it. The `User` model allows you to perform operations (find, update, delete, etc.) on the `users` collection.

### Example: Multiple Models for Different Collections

Let’s say you’re building a project with `users`, `products`, and `orders` collections:

- You would define separate schemas for each collection:
  ```javascript
  const userSchema = new mongoose.Schema({
    name: String,
    email: String
  });

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number
  });

  const orderSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number
  });
  ```

- You then create separate models for each schema:
  ```javascript
  const User = mongoose.model('User', userSchema);        // For 'users' collection
  const Product = mongoose.model('Product', productSchema); // For 'products' collection
  const Order = mongoose.model('Order', orderSchema);      // For 'orders' collection
  ```

### Key Points
- **Each model is based on a single schema** and represents a single collection in MongoDB.
- Models are not "groupings" of different schemas, but each one serves as a means to interact with a specific collection defined by a single schema.
  
In other words, **if you need to interact with multiple collections, you create a separate model for each collection**. The database as a whole can be thought of as 
"grouping" these models/collections, but Mongoose doesn't offer a concept where a model itself directly groups multiple schemas.


2. What is Cluster, Collections, documents and fields?


Yes, your understanding of MongoDB's structure is correct! Here's a breakdown of MongoDB's hierarchical structure based on what you described:

### 1. **Cluster**
   - A **cluster** is essentially a collection of servers that store your data. It's managed by MongoDB and provides scalability and redundancy. For instance, in MongoDB Atlas (MongoDB’s cloud service), you create a cluster for each project, and it serves as the container for your databases.
   - **Note**: Clusters in MongoDB Atlas are also used to distribute data across multiple nodes, which improves availability and fault tolerance.

### 2. **Database**
   - Within a cluster, you can create multiple **databases**. Each database is a separate collection of data and can be organized by application, environment, or other logical groupings.
   - For example, you could have a database for your production environment, another for testing, etc.

### 3. **Collection**
   - Inside each database, you can create multiple **collections**.
   - Collections are similar to tables in SQL databases. However, unlike SQL tables, MongoDB collections are schema-less, meaning they don’t require a strict structure for their documents.
   - Common examples might be a `users` collection for user data, an `admin` collection for admin data, etc.

### 4. **Document**
   - Each **document** within a collection is a JSON-like object (BSON in MongoDB) containing key-value pairs, similar to rows in SQL databases but with a more flexible structure.
   - Documents in MongoDB are flexible and can vary in structure, allowing different documents in the same collection to have different fields.
   - **Fields** within each document represent individual pieces of data (similar to columns in SQL databases).

### Example Structure
Here's a quick example to illustrate:

- **Cluster**: `ProjectCluster`
  - **Database**: `UserDB`
    - **Collection**: `users`
      - **Document**: `{ "username": "john_doe", "email": "john@example.com", "age": 30 }`
    - **Collection**: `admins`
      - **Document**: `{ "adminName": "admin123", "role": "superadmin", "email": "admin@example.com" }`

This hierarchy allows you to structure your data in MongoDB flexibly, without the constraints of a rigid schema.


================================== Class 07  =====================================

** In this episode we learned, how to make API for http methods like hot to get or post data, in request how to read data, so as per the need of method we can go further.


     1. We can't hardcode the data to save in DB as we need the user to fill this data in a HTML form and send us this data in an api and we get this data & push it into DB,
     as api should recieve the data and push it into the database.
     2. In postman upper part is request and below is response and in Body there are different ways to send the data inside the api like form data, binary data, raw data 
     GraphQL api's by using GraphQL quereies and something but as we want to keep our api's very simple we want to send the JSON to our server(backend) and server should
     read the JSON data and then push it into the database.   
     3. We will choose raw data in which we can share the data in Text, JS, JSON, HTML or XML. XML was used widely to send and recieve data befoer JSON.
     4. JSON and JS are two different things but they can be interchange easily, that’s why JS and JSON works very well together.
          - JS object => Value is only String on left it is Key and we can use comma after last value also.
               {
                    firstName: "Cristiano",
                    lastName: "Ronaldo",
                    emailId: "CR7@gmail.com",
                    password: "HolaMadrid",
                    }

          - JSON object => always need key value pairs as String and after last value we can't use comma.
               {
                    "firstName": "Cristiano",
                    "lastName": "Ronaldo",
                    "emailId": "CR7@gmail.com",
                    "password": "HolaMadrid"
                    }
     5. POST API 
     And now if we send the data and want to recieve the data in code and then save it to the UI. so for understanding, we commented the code as we are not sending any 
     response and when we console the req and hit the api we see as there is no response so the req is going in infinite loop but in console we got lot of things.
          - When we send the request from postman and server has received the request and express has converted this request into an object and it has given to us to use it.
          - And the data we sent is also a part of this request but we cannot read the data directly from the object and data is present on the body of the request.
          - But when we console req.body it give us UNDEFINED bcoz the data sent is in JSON format and our server is not able to read that JSON data.
          - To read the JSON data, we will need a Middleware and why we saying middleware bcoz we have to use it for all the API's.
          - That middleware can just check the incoming request, read the JSON, convert into the JS object and put it into the body and give access to the data.
          - express.json() is the middleware.
          - We can use it by creating app.use(express.json()) and now our middlware is active for all the routes.
               - app.use(() => {}) this request handler will run on every request that come to our server means work for all the routes automatically.
               - app.use("/test", () => {}) if given some route then this route handler will only work for this URL including every http method.
               - app.get("/test", () => {}) if given some methode and route then this route handler will only work for that http method and URL. 
          - As the JSON data will come to the server then express.json() middleware will read and convert into the JS object and add that JS object on to the request body
          and now we can read the body and get the data and can create new instance for the User model using the data which we got from an API and then User can be saved 
          in our database.
          - We will write the req.body in the new user instance and then save the data in DB.
               
               - app.post("/signup", async (req, res) => {
                    // Creating a new instance of the User model
                    const user = new User(req.body);
                    
                    try {
                         await user.save();
                         res.send("User added successfully!");
                         } catch (err) {
                              console.log("Error creating" + err.message);
                              res.status(400).send("Error saving the user:" + err.message);
                              }
                              });  
     6. GET API 
     Always if we want to GET, DELETE, UPDATE something particularly we will do req.body.xyz (xyz whatever we want to find) so we have to put exact same what we put in 
     Schema.  
          - we can use diff. methods of mogooose for diff. tasks like Model.find() to get all the data of a Model or Model.findById() to get all the data by Id of a Model.
          -Like we have a Modal i.e. User so we can use it like
               - User.find({}) to get all the data of User Model.
               - User.find({emailId: userEmail}) to get users data of same given userEmail. emailId on left as key has to be same as Schema of Model.
          - We have to write whatever we finding as per Schema of Model like req.body.emailId like here below we are finding all the users who have userEmail. 
               - app.get("/user", async (req, res) => {
                    const userEmail = req.body.emailId;
                    console.log(userEmail);
                    
                    try {
                         const users = await User.find({ emailId: userEmail });
                         if (users.length === 0) {
                              res.status(404).send("User not found");
                              } else {
                                   res.send(users);
                                   }
                         } catch (err) {
                              res.status(400).send("Something went wrong");
                              }
               });
          - To get all users of feed we can directly find it by using Model.find({}) as there req.body.xyz would not be needed.
               - app.get("/feed", async (req, res) => {
                    try {
                         const users = await User.find({});
                         
                         if (users.length === 0) {
                              res.status(404).send("No users found");
                              } else {
                                   res.send(users);
                                   }
                         } catch (err) {
                              res.status(400).send("Something went wrong");
                              }
                              });
     7. DELETE API
     for DELETE API we can use the method findByIdAndDelete() as it will find the user by id and delete it.
          - now we have to find the id first that we will do by req.body._id and then we call call the method findByIdAndDelete().
          - we can use it normally or we can also use shorthand.
               - normal => const user = await User.findByIdAndDelete({ _id: userId }); or const user = await User.findByIdAndDelete({ _id: id }); 
               - shorthand => const user = await User.findByIdAndDelete(userId);
          - app.delete("/user", async (req, res) => {
                  const userId = req.body._id;
                  console.log(userId);
                  
                  try {
                    const user = await User.findByIdAndDelete(userId);
                    if (!user) {
                         res.status(404).send("User not found");
                         } else {
                              res.send("User deleted successfully");
                              }
                    } catch (err) {
                         res.status(400).send("Something went wrong");
                         }
               });     
     8. PATCH API (Update) 
     - findByIdAndUpdate and findOneAndUpdate are same thing they both are equavilent to each other.
     - the only difference is in findByIdAndUpdate we can only use ID and in findOneAndUpdate we can use other things also like ID, EMAILID, USER NAME etc.
     - we using findByIdAndUpdate and in this first, we will get the id by req.body._id and then we can share the fields that we want to update along with id in the JSON and 
     that we can get by req.body and then in method findByIdAndUpdate we can use both id and data that we want to update.
     -  as in req we passed id and fields that we wanted to update and same we send as response in which it updated the fields but it didn't created a new id field bcoz 
     internally MongoDB ignores this id field bcoz in the User schema there is nothing like id field. Like with id we added the data we want to update but also added arrray 
     of skills in which i mentioned Javascript, NodeJs, React and in my schema there is no skills field then MongoDB will ignore this skill field.
          - req we shared with the id and data we want to update but also added arrray of skills but skills is not there in schema 
          {
               "_id": "6731e0d414c4873e06596ec2",
               "emailId": "Ishhhhhhh01@gmail.com",
               "skills": ["JavaScript", "NodeJS", "ReactJs"]
               }
     - Update data of the user
          - app.patch("/user", async (req, res) => {
               try {
                    const userId = req.body._id;
                    const data = req.body;
                    const user = await User.findByIdAndUpdate(userId, data);
                    
                    if (!user) {
                         res.status(404).send("User not found");
                         } else {
                              res.send("User updated successfully");
                              }
                    } catch (err) {
                         res.status(400).send("Something went wrong");
                         }
               });
     - If we use third parameter which is Optional so in that returnDocument: "before" it will log the older version of the document and if we use returnDocument: "after" 
     it will log the updated/recent version of the document.
     - If not use this 3rd parameter then it takes the default value i.e. "before".   
     - Update data of the user but also added Optional 3rd parameter
          - app.patch("/user", async (req, res) => {
               try {
                    const userId = req.body._id;
                    const data = req.body;
                    const user = await User.findByIdAndUpdate(userId, data, { returnDocument: "before", });
                    console.log(user);

                    if (!user) {
                         res.status(404).send("User not found");
                         } else {
                              res.send("User updated successfully");
                              }
                    } catch (err) {
                         res.status(400).send("Something went wrong");
                         }
               });           
          


************** HOME WORK **************
 
 1. Difference b/w  JS object and JSON? 

 JavaScript Objects and JSON (JavaScript Object Notation) are closely related but serve different purposes and have distinct formats. Here’s how they differ:

### 1. JavaScript Object
- **Definition**: A JavaScript object is a data structure that represents key-value pairs. It's native to JavaScript and used in code to organize and manipulate data.
- **Syntax**: JavaScript objects have a flexible syntax, allowing for functions, variables, and methods as values.
- **Usage**: Can be used directly in JavaScript code to define data structures, such as arrays of objects, nested objects, or functions within objects.
- **Example**:
  ```javascript
  const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello!");
    }
  };
  ```
  In this example:
  - `name` and `age` are properties with string and number values.
  - `greet` is a method (function) within the object.

### 2. JSON (JavaScript Object Notation)
- **Definition**: JSON is a lightweight data interchange format based on JavaScript object syntax but is specifically designed for data storage and communication between a 
server and a client.
- **Syntax**: JSON is a strict text-only format with specific rules:
  - **Keys and string values** must be enclosed in **double quotes**.
  - **No functions or methods** are allowed; only simple data types like strings, numbers, arrays, and nested JSON objects.
- **Usage**: Used for serializing (converting data into a string) and transmitting structured data over a network. It’s language-independent, making it widely used for APIs.
- **Example**:
  ```json
  {
    "name": "John",
    "age": 30
  }
  ```

### Key Differences

| Feature               | JavaScript Object                           | JSON                                         |
|-----------------------|---------------------------------------------|----------------------------------------------|
| **Data Type**         | JavaScript data structure                   | Text format (string)                         |
| **Keys & Strings**    | No quotes required for keys, single or double quotes for strings | Double quotes only for keys and strings     |
| **Functions**         | Can contain functions                       | Cannot contain functions                     |
| **Usage**             | Used directly in JavaScript code            | Used to transmit data between a server and client or to store structured data |
| **Parse/Serialize**   | Native to JavaScript; no need for parsing   | Needs to be parsed into a JavaScript object (`JSON.parse()`) or serialized (`JSON.stringify()`) |

### Converting Between JavaScript Object and JSON
- **JavaScript Object to JSON**: Use `JSON.stringify()`
  ```javascript
  const person = { name: "John", age: 30 };
  const json = JSON.stringify(person);  // Converts to JSON: '{"name":"John","age":30}'
  ```

- **JSON to JavaScript Object**: Use `JSON.parse()`
  ```javascript
  const json = '{"name": "John", "age": 30}';
  const person = JSON.parse(json);  // Converts to JavaScript object: { name: "John", age: 30 }
  ```

In summary, JavaScript objects are flexible and used directly in code, while JSON is a strict text format ideal for data exchange.


Why we not directly send js object why to send json to middleware and then it will convert it into JS objext?

for get api he wrote if and else why he catch block not thwoing error there ? why we have to write if ekse and throw error by it and then also write catch?

i can right _id or userId which one is besta s he said fillow the schema in method follow schema but fir getting data from req we can use anythign bt it has to same to 
what we send in request. 

how he getting id by User id? req vala we can write anything no need to follow schema but methhod m schema follow hoga as req m toh jo bhjenge vhi milega body m so it upto 
us

directly krenge toh static ho jayega?   

    in req if m changing the key part and in code its differnt like in code its req.body._id but in req i shared req.body._aid it shows user not found but if i add weong id 
    it shows soemethign went weong as we discus earlier catch will show the code error weong id is not code error


================================== Class 08  =====================================

** In this episode we learned, how to make validations in Database(Schema) and API's and also learned how to get id from params. 

     1. Validations are needed in post and update api bcoz by them we insert the data in database so we want restrict checks in these api's.
     2. If we want to add array type in schema of Model we can define it like type: [Strings].
     3. before putting checks/validations in api we will add the checks in database/schema itself.
          - There should be some mandatory fields and if those fields are not there we will not create a user document.
          - It can be email, passsword, first name, last name all these are mandatory/required fields.
     4. Schema Types (Validations in Database/Schema)
          - required => If we put required: true in firstName and user will definitely have to give a firstName otherwise mongoose will not allow the insertion/document 
          into the database/collection and if user miss some other field which don't have required then user will be added to the database.
          - unique => If we want there should be a unique email id for the user means one entry with one email id as two different users can't use same email id.
          - default => If we want whenever the user registers it should take some default value.
          - lowercase => If we want our field to be consistent in the case like email id conssistent in lowercase, we can add lowercase flag into the emailId field.
          - trim => If user is sending an emailId with white-spaces so mongoDB treat that to be differnet so we can trim the spaces by trim flag.  
          - minLength => If we want firstName should be of minimum length of atleast 4 characters othwerise user will not be added to the database.
          - maxLength => If we want firstName should be of maximum length of 50 characters if more than that user will not be added to the database.
          - min => If we want age  should be of minimum 18 if less than that user will not be added to the database.
          REMEMBER :- If type is string we use minLength or maxLength and If tye is number we use min and max.
          - validate() => If we want to add some more complicated check like gender is male, female or others we can add custom validate function.
               i. Also, this validate function will only be called when the new document is created &and for update the existing data this validate function will not run 
               by default.
               ii. To run on Update the existing data, we need to enable this validate function by adding another object i.e {runValidators: true}, in the findByIdAndUpdate 
               method as 3rd optional parameter.
          - To know when the user was regisered or update on to our platfrom, we can do that by adding another object i.e {timestamps: true} as 2nd parameter while creating
           the schema after adding all the types of schema object.
               i. const userSchema = new mongoose.Schema( {}, {timestamps: true} );
               ii. We can do that by adding extra field to the schema but no need to do that.
                    - createAt: {
                         type: Date,
                         }
               iii. It is very important to add timestamps to check when user was registerd or profile was updated to perform some tasks like filter, searching or sorts
                the users.
     5. Validations in API
          - If user is signing up on the platform we don't need all the information of user like age, skills etc and just want 4 required fields like firstName, lastName,
          emailId, password and it signs up for application.
          -  If user try to update the email id from "viratkohli@gmail.com" to "rohitsharma@gmail.com" it will be done but we don't want user to be change the emailId once 
          it has registerd bcoz emailId is very sensitive thing.
          - We have to put a API Level validation. 
          - To get id, we can use params like req.params.userId
          - If in the api end point we putting "/user/:userId" then for getting userId in params need to use same end point i.e userId.
     6. Validating email id which is little tricky and we can use a npm package for validating email id i.e. validator.
          - Now, we doing schema level validation.
          - methods of validator package are isEmail, isStrongPassword, isURL etc.
     7. NEVER TRUST req.body                        


================================== Class 09  =====================================

** In this episode we learned, how to put validations in API (signup) and encrypt the password in DB and make login API and confirm the password while Login.

     1. Signup api should be very safe and before creating new instance of User Model.
     2. When signup api hit,we should check the validation of data in req and then encrypt the password and store in the database.
     3. We can put the validations in utils folder by creating a validation.js file and put all the validation logic there in the validateSignUpData function.
          - We can check first that do we got all the fields which are mandatory or not and throw ERROR if mandatory not there.
          - We can check if the Email id is correct email or not by validator package, like is there @, .com, .in etc is pressent or not.
          - We can check if the password is strong or not and if weak then throw ERROR.
          - We can put multipe validations in the function and then export it and import it in app.js and call it inside signup api and pass req as an argument.
     4. Now we can encrypt the password and then save it to the DB and for that we can install a npm package called bcrypt.
          - bcrypt.hash(myPlaintextPassword, saltRounds); example:  const passwordHash = await bcrypt.hash(password, 10);
          - slat rounds => how many rounds of salt is required to encrypt the password. 10 is the optimal value to encrypt.
          - Once password is encrypted it cannot be decrypted.
          - then pass the fields that we want to store in DB in an object and passwordHash as the value of password in the object.
     5. LOGIN API (POST)
          - We can get email and password from req.body.
          - We can check if the Email id is correct email or not by validator package, like is there @, .com, .in etc is present or not.
          - We can then check if the email is present in the DB or not by findOne method bcoz somebody can try to login with random email which is not present in the DB.
          - Then, we can compare the entered password with the stored password.
               - bcrypt.compare(myPlaintextPassword, hash); example: const isPasswordValid = await bcrypt.compare(password, user.password);
          - Also, don't tell the user that email is not present in the DB. Do not write explicitly write these kind of error messages. 
          - Instead, write Invalid creddentials so it won't be disclosed that email is wrong or password.


================================== Class 10  =====================================

** In this episode we learned, how JWT token used, made User middleware so API's can be access only if user is logged in and also mongoose schema methods.

     1. Unless we login, we can't get, add, edit or delete our profile or send request to other person and all this need AUTHENTICATION means need to be login.
     2. Whenever we hit a req from client to server it makes a socket connection and sends the response back and socket connection is closed.
          - Like User req for GET profile and gets the response back from server then new connection for PATCH profile req and gets the response back from server.
     3. User came to application and make a login req then server checks that email and password is correct so it sends the response back from server i.e. JWT token.
     4. User now store the JWT, now whenever user make an api call to get profile, send request or update profile etc. this JWT token will be sent with all the requests and 
     server will validate the JWT token each and every time.
     5. JWT token is wrapped inside a Cookie and it is unique for every user and browser by default the Cookies.
     6. How AUTHENTICATION flow works? 
          - Whenever a user is login, server will create a token attach into a Cookie & send back & now that cookie will be stored by the browser any request which is coming
          up next that cookie will be sent along & when the cookie will be sent along we will validate that once again & do anything that we want to do in the application.
     7. In login api, we will firstly, Create a JWT token and then Add the token to cookie and send the response back to the user.
     8. Once we login a JWT token wrapped in a cookie, will be sent back to the user and when we call any other api then that cookie will be sent with the request and 
     validate on server then response will be sent back to the user.
     9. Whenever we are login in as soon as we hit the login api,  we will set the token inside the cookie and will give uh the cookie and now job of browser is to read that
     cookie and keep it safely and whenver we request any other api call send back the cookie.
     10. We can also send an expiry date of the JWT token and cookie like cookie will expire in 1 day, 1 hour, 10 minutes or never expires and if cookie is expired and we 
     try to request then it will fail the validation and response will be please login and user will be redirected to the Login page.
     11. We can get the cookie by req.cookie but unable to read it without using the npm package "cookie-parser" as we need a middleware to get the cookies, like same way 
     we wanted express.json() for reading JSON data and if we console cookies it will show an object { token: 'jafbkakdbajmfvavjavkkablablkabdkabkakakhakddadfdf' }.
          - const cookieParser = require("cookie-parser");
          - app.use(cookieParser());
          - const cokkies = req.cookies;
     12. If cookie is expired or not available then if we console cookies it will show [Object: null prototype] {}.
     13. As, if we want to secure the API's like profile api, we will extract the token from the cookie through destructuring and validate it and if the token is valid we 
     will send the response back otherwise we will say please login. 
     14. JWT => JSON WEB TOKEN. It generates a unique token and it has some secret information embedded inside it.
          - JWT token is divided into 3 things i.e HEADER, PAYLOAD and SIGNATURE.
          - HEADER => The header of a JWT specifies the token type which is JWT and the algorithm used to create the token's signature such as HMAC SHA256 or RSA SHA256.
          - PAYLOAD => The secret data we will hide inside this token. This section contains the data that this JWT was created to transport.
          - SIGNATURE => JWT uses to check whether the token is validated or not. verifies that the message was not changed while being passed between two services.
          - For JWT, we will install a npm package i.e npm i jsonwebtoken.
     15. In jsonwebtoken package, there is method for creating a new JWT and verify JWT.
          - jwt.sign({ foo: 'bar' }, privateKey);
          - jwt.verify(token, privateKey);      
     16. In jwt.sign we can hide some data inside this token and pass private key. We have to send first parameter what we want to hide like we will hide the userId inside 
     the token and private secrety key will be the password that only I know means only server knows it, neither user knows it nor attacker.
     17. We got the token after login and we sent that inside the cookie to the client/user and this token also have secret information about who is logged in as userId of
     user is hidden inside this token that's why we hide the userId in the jwt.sign method.
     18. Now we will in API's like profile api validate the token by using jwt.verify method and it will give us the decoded value i.e. the userId of the user.
          -  { _id: '673b6399c4ab14892e2b0cfe', iat: 1732266715 }
          - and by the id we can get to know that who the user is by using the method findById.
     19. If we logged in using the email and password of Elon Musk so the profile data can only be access of Elon Musk only, as Elon Musk cannot access the profile data of 
     any other user bcoz Elon Musk won't know the email, password and cookies can't be set without email and password.
     20. We will made middlware to validate the user and that middlware will be used to secure API's. As in userAuth middleware we checking the token and if token is valid
     so it will check the user in databse by id.
     21. We can use the same middlware for all api's where we want it send response only when the user is logged in like we did in profile or sendConnectionRequest api's.
     22. We can also add token and cookies expiry as third parameter in "jwt.compare" and res.cookie in login resprectively .
          - const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$786", {
        expiresIn: "1d",
      });
      - res.cookie("token", token, { expires: new Date(Date.now() + 900000) });
     23. Always expire the jwt token. Major websites use 1 - 7 days of time.
     24. Mongoose schema methods => User schema defines the user so we can attach few methods onto this schema that is applicable for all users. These methhods are helper
     methods that is very closely related to the user.
          - In login, we creatin JWT token and passing the id there to secure and this method is closely related to the user and every user will have a different JWT token
          and we can offload such things to user schema methods.
          - Always use normal funciton don't use arrow function.
               - userSchema.methods.getJWT = async function () {};
          - We will write all the user schema methods inside models folder in user.js where the schema of user is written and there we can get our user as this.
          - Whenever we create a instance of the model, all the users save in db are the instances of user model and when we use this in the userSchema.methods.getJWT it 
          will represent that particularl instance like we did user.getJWT and user is Elon then it will get the JWT token for Elon.


================================== Class 11  =====================================

** In this episode we learned, how to make EXPRESS ROUTER and also make few API's with all validations i.e. POST /logout, POST /profile/edit and POST /updatePassword.

     1. Express Router => To manage our API's effeicently and we will group our api's to different type of routers.
          - It will make the code more readable and clean and also as per the API's we will group them and make express routers like "authRouter" for - POST /signup,
          POST /login and - POST /logout or "profileRouter" for - GET /profile/view, - PATCH /profile/edit and - PATCH /profile/password etc.
     2. Now, we can create routes folder in src and inside that make different routes like auth.js for authRouter and profile.js for profileRouter etc.
          - Inside auth.js, we will require express and then call express.Router() to create express router.
               - const express  = require('express');
                 const authRouter = express.Router();
          - Best practice and in companies we write router and in whatever file it will be present it will that router but as we learning we can use like this authRouter.
          - now we will do exact same code like we did for api's just the initial name that was app.get, app.post will be changed to authRouter & it is almost the same thing.
          - Then we require all the routes in app.js like
               - const authRouter = require("./routes/auth");
                 const profileRouter = require("./routes/profile");
          - And use them like middlwares so they will go one by one to each one of them and from where it finds the response won't go further.       
               - So if we call the api /profile so it will first check all the API's of authRouter if not found same routing end point "/profile" then it will go to the next one 
               i.e profileRouter and if found the end point there then it will send the response.
               - app.use("/", authRouter)
                 app.use("/", profileRouter)
     3. For LOGOUT API, we can directly just expire the cookie and set it to null instead of token. Here, no need to use userAuth middlware to check whether user is logged in
     or not bcoz by hitting logout api we don't have any harm neither we need try catch but if we want we can use both the things too.
     4. In big project where we storing  session inside the db we do cleanup activites before logout.
     5. For PROFILE/EDIT API, we made a validation function where we checked the allowedEditFields and is there any unnecessary field or not and isEditAllowed can be done or
     not. If not throw error and if we can so as we also using middleware "userAuth" to check whether user is LoggedIn or not we are also sending current instance of user so
     we will just get that user by req.user and push the all the updated values to the saved user by Object.keys(req.body).forEach((key) => loggedInUser[key] = req.body[key]),
     save the user in DB and send the response back.
     6. For UpdatePassword API, we made a validatePasswordUpdate function where we took currentPassword and newPassword and also took the current user instance then validate
     the currentPassword and if wrong throw error then check newPassword strong or not if not then throw error and then create a encrypte the password by bcrypt.hash().
     7. In UpdatePassword api, we stored in a variable and invoked the function with await so validatePasswordUpdate can runs asynchronously, bcoz missing await will not 
     wait for the asynchronous code inside the function to complete, leading to passwordHash being undefined. Then set user.password to newPasswordHash and save that in DB.

================================== Class 12  =====================================

** In this episode we learned, we made connectionRequest Schema, understood for ObjectId in schema types : mongoose.Schema.Types.ObjectId and also learned about multiple 
corner cases in connectionRequest Schema, learned about schema.pre method, also about index and compound index to make our query/API faster.

     1. We will create connectionRequest Model, as now one user will send request to another. We will not add object of connectionRequest to user model bcoz anybody can send
     request to anyone and other person can reject it or it can be in hanging state or might not accepted so there are so many cases and best way to handle is kepep it away
     from User collection. Bcoz User Schema defines the identity of a user and if there are two user who are making a connecton and that connection should have its own 
     schema.
     2. In In ConnectionRequestSchema, we can have 3 fields, fromUserId to know who send the request, toUserId to know whom sent the request, and status which type of 
     request sent like ignore, interested, accepted or rejected.
     3. for using the type as ID we have to use "type: mongoose.Schema.Types.ObjectId".
     4. For status also as it can be of only 4 types we can use enum where we can give these 4 types and if it use other than that it will throw a message.
     5. In the request/send/:status/:toUserId we have to put validations like status has to be in this API either interested or ignored but as in enum we have to other 
     options too i.e. accepted and rejected.
          - so if i put accepted or xyz then also api is running so i need to put validtion there with the Allowed Updates where only interested and ignored are allowed.
          - then one more case is if A sent request to B, then A can't sent request again to B and as B got the request from A so now B can't sent request to A also.
          - so for this case we have to check in the DB of connectionRequest by using $or in the query and will check for both the cases 
               - {fromUserId: fromUserId, toUserId: toUserId  }  {fromUserId: toUserId, toUserId: fromUserId}
          - another case will be we have to check the toUserId is there in our User db or not means user exists in db or not and we can do that by simply findOne or 
          findById method and if not found throw Error.
          - another case will be we have to check that fromUserId cannot send the request to fromUserId (himself).
     6. Like we created schema mehtod in User model we can also create schema.pre which is like a middlware that we can use for the last case i.e sending request from
      fromuserId to fromUserId.
          - For schema method and pre method always write normal function. Do Not use arrow funciton.
          - Whenever we call save method to save the data in DB so before that pre method will be called.
          - Now as we will use pre method we can't compare fromuserId is equal to toUserId by if condition bcoz thats in object so we have to use equals method.
          - and at last we have to use next() bcoz its a middlware so it will go further after next() only.
          - We can write in directly in API also but best practice and in advance code we write this in schema file in this manner.
     7. Suppose 1000 people using our app and each user is sending 100 connetion request and our connectionRequest collection will have 1 lakh documents(records) and our 
     query i.e finding existingConnectionRequest will become slow and to solve this we need "indexes" in our DB and we can index our database on to certain fields and api
     become faster.
          - Suppose we have 100 people with name of Virat and if we do search query to find User woth firstName as Virat and when we do User.find our DB will take lot of 
          time to return the request like 10sec bcoz DB has to go to each entry to check the firstName as Virat but if we keep index on the DB on the firstName then query 
          will become very very fast.
          - If index will be there in schema then query to find will be very fast otherwise it will be slow as the DB grows.
          - And we have to use the index on those fields by which we are finding the data in db as in our case its emailId.
          - If we using *unique: true* in any field ex. emailId then mongoDB will automatically creates an index for that field.
          - If we want to create index for any field we can use *index: true*.
          - Suppose we want to find data by firstName and don't want firstName to be unique then we can use *index: true*.
     8. Compound Index => When in query we finding two things like we doing query together in **existingConnectionRequest**  fromUserId and toUserId so there we have to 
     index them both and i.e Compound Index.
          - 1 is for assending order and -1 is for descending order.
          - Suppose we finding fromUserId in connectionRequest and also used index in **fromUserId: 1** then our query of finding fromUserId will be very fast.
               - connectionRequest.find({fromUserId: 31313464641321354})
               - connectionRequestSchema.index({ fromUserId: 1 });
          - But if we also finding toUserId in connectionRequest but used index in only **fromUserId: 1** then just keeping index on fromUserId will not work and it will not
          make the query fast and we have to keep the **compound index** i.e. adding index to toUserId also then only it will make our query/API fast even we have billion of
          documents in the collection.
               - connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });
     9. Like we doing a query of find firstName and lastName, we need to use the **compound index**.
           - User.find({firstName: "Elon", lastName: "Musk" })
           - userSchema.index({firstName: 1, lastName: 1});
           - As it will change the order of how the MongoDB stores the enteries in the database.
     10. Don't create unnecessary indexes.
     11. Logical Query 
          - $and => Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
          - $not => Inverts the effect of a query predicate and returns documents that do not match the query predicate.
          - $nor => Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
          - $or => Joins query clauses with a logical OR returns all documents that match the conditions of either clause. 
     12. Comparison Query
          - $eq => Matches values that are equal to a specified value.
          - $gt => Matches values that are greater than a specified value.
          - $gte => Matches values that are greater than or equal to a specified value.
          - $in => Matches any of the values specified in an array.
          - $lt => Matches values that are less than a specified value.
          - $lte => Matches values that are less than or equal to a specified value.
          - $ne => Matches all values that are not equal to a specified value.
          - $nin => Matches none of the values specified in an array.                                



************** HOME WORK **************

(1). What is enum in mongoose?

In **Mongoose**, an **`enum`** is a type of validator used to specify a set of allowed values for a field in a schema. It ensures that the value assigned to the field can 
only be one of the predefined values. If a value outside the specified set is assigned, Mongoose will throw a validation error.

---

### Syntax
The `enum` validator is added as part of the schema definition under the `enum` option for a field.

### Example
Here’s how you can use `enum` in a Mongoose schema:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "editor", "viewer"], // Allowed values for the role
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
```

In this example:
- The `role` field can only have values `"admin"`, `"editor"`, or `"viewer"`.
- Any attempt to save a document with a different value for `role` will result in a validation error.

---

### Usage
```javascript
const newUser = new User({
  name: "Alice",
  role: "admin", // Valid value
});

newUser.save()
  .then(() => console.log("User saved successfully!"))
  .catch((err) => console.error("Error:", err.message));

// Example with an invalid value
const invalidUser = new User({
  name: "Bob",
  role: "superuser", // Invalid value
});

invalidUser.save()
  .then(() => console.log("User saved successfully!"))
  .catch((err) => console.error("Error:", err.message));
```

---

### Error Handling
If a value not in the `enum` list is assigned, Mongoose will throw a validation error like this:

```
Error: User validation failed: role: `superuser` is not a valid enum value for path `role`.
```

---

### Benefits of Using `enum`:
1. **Data Integrity**: Prevents invalid values from being saved to the database.
2. **Readability**: Clearly defines the acceptable values for a field.
3. **Easy Validation**: Simplifies validation logic by using built-in schema features.

---

### Custom Error Messages
You can provide a custom error message for the `enum` validator:

```javascript
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: {
      values: ["admin", "editor", "viewer"],
      message: "{VALUE} is not a valid role!", // Custom error message
    },
  },
});
```

If an invalid value is provided, the error message will include the invalid value:
```
Error: User validation failed: role: `superuser` is not a valid role!
```

(2). What are index in mongoose so we can make our API fast like if we finding the data by User.emailId then we puttign indexes on emailId field ? 
Tell me what is indexes? what is compound index? how to make our query faster?

### **What are Indexes in Mongoose (MongoDB)?**

Indexes are special data structures in MongoDB that store a small portion of the dataset in an easy-to-traverse format. They help improve the performance of query operations by allowing MongoDB to quickly locate and retrieve the requested data instead of scanning the entire collection.

For example, if you frequently query by `User.emailId`, creating an index on the `emailId` field allows MongoDB to find matching documents much faster.

### **What is a Compound Index?**

A **compound index** is an index that includes multiple fields. It is used when queries often involve multiple fields together. For example, if you often query by both `emailId` and `status`, creating a compound index on `{ emailId: 1, status: 1 }` will optimize such queries.

- **Order Matters**: In a compound index, the order of fields matters. For example, an index on `{ emailId: 1, status: 1 }` will support:
  - Queries on `emailId`
  - Queries on both `emailId` and `status`
  - But **not queries on `status` alone**.

### **How to Create Indexes in Mongoose**

You can create indexes in two ways:

#### 1. **Schema-based Indexes**
Define indexes directly in the Mongoose schema using the `index` option:
```javascript
const userSchema = new mongoose.Schema({
  emailId: { type: String, required: true, unique: true },
  status: { type: String },
});

// Create a compound index on emailId and status
userSchema.index({ emailId: 1, status: 1 });
```

#### 2. **Programmatically**
You can also create indexes programmatically after defining the schema:
```javascript
User.createIndexes({ emailId: 1 });
```

### **How to Make Queries Faster**

1. **Use Indexes**:
   - Add indexes to fields you frequently use in filters, such as `emailId`, `username`, or `status`.

2. **Optimize Query Fields**:
   - Only retrieve the fields you need using projections. For example:
     ```javascript
     User.find({ emailId: 'example@example.com' }, { firstName: 1, emailId: 1 });
     ```

3. **Avoid Large `$or` or `$in` Clauses**:
   - These can degrade performance. Try to break them into smaller queries or use indexing efficiently.

4. **Analyze Queries with `explain()`**:
   - Use the `.explain("executionStats")` method to see how MongoDB is executing your query and ensure it's using indexes effectively.
     ```javascript
     User.find({ emailId: 'example@example.com' }).explain("executionStats");
     ```

5. **Shard Your Database (for Large Data Sets)**:
   - For extremely large datasets, consider sharding, which splits data across multiple servers.

6. **Use Compound Indexes for Complex Queries**:
   - If your query involves multiple fields (e.g., `{ emailId, status }`), a compound index will be faster than multiple single-field indexes.

### **When to Avoid Indexes**
- For fields with high cardinality (e.g., unique values like `emailId`), indexes work well.  
- For low-cardinality fields (e.g., `status` with values like "active" or "inactive"), excessive indexing can slow down writes without much query performance gain.

Indexes are a powerful tool in MongoDB for improving query performance, but they should be used judiciously, keeping in mind the specific use case of your application.

(3). Suppose m doing a query connectionRequest.find({fromUserId: 31313464641321354})
if i can add index by using **unique : true** or **index: true** in fields then why using connectionRequestSchema.index({ fromUserId: 1 }); 
what is the differnece which one is better?

When deciding between `unique: true`, `index: true`, or explicitly creating an index using `connectionRequestSchema.index()`, it depends on your use case. Here's the difference and when to use each:

---

### **1. `unique: true`**

- **What it does**: 
  - Creates a **unique index** on the field. This ensures that the field value is unique across all documents in the collection. 
  - If you attempt to insert or update a document with a duplicate value, MongoDB will throw an error.

- **Use Case**:
  - Use `unique: true` when the field must have unique values, such as `email` in a `User` schema.

- **Example**:
  ```javascript
  const connectionRequestSchema = new mongoose.Schema({
    fromUserId: { type: String, unique: true },
  });
  ```

- **Limitation**:
  - You cannot have multiple documents with the same `fromUserId`. If this is not your requirement (e.g., `fromUserId` may appear multiple times), `unique: true` is **not appropriate**.

---

### **2. `index: true`**

- **What it does**:
  - Creates a **non-unique index** on the field. This improves the query performance for filters like `.find({ fromUserId: ... })`.
  - Allows duplicate values, which is ideal for fields like `fromUserId`, where multiple requests may come from the same user.

- **Use Case**:
  - Use `index: true` when you query the field frequently and it doesn’t need to be unique.

- **Example**:
  ```javascript
  const connectionRequestSchema = new mongoose.Schema({
    fromUserId: { type: String, index: true },
  });
  ```

---

### **3. Explicit Index with `.index()`**

- **What it does**:
  - Allows full control over index creation. You can specify the type of index (e.g., compound index, unique index, text index) and additional options.

- **Example**:
  ```javascript
  connectionRequestSchema.index({ fromUserId: 1 });
  ```

- **Use Case**:
  - Use this when:
    - You want to define a compound index (e.g., `{ fromUserId: 1, toUserId: 1 }`).
    - You need custom options, such as a sparse index or TTL index.
    - You want to create an index programmatically after defining the schema.

---

### **Which One is Better?**

- **If `fromUserId` must be unique**: Use `unique: true`. This automatically creates a unique index and enforces the uniqueness constraint.

- **If `fromUserId` is not unique, but frequently queried**: Use `index: true` or `connectionRequestSchema.index({ fromUserId: 1 })`. Both achieve the same result in this case, but `.index()` gives more flexibility if you plan to extend the index later.

---

### **Recommendation for Your Query**
Since your query is:
```javascript
connectionRequest.find({ fromUserId: 31313464641321354 })
```
- If `fromUserId` can have duplicate values (e.g., multiple connection requests from the same user), **use**:
  ```javascript
  connectionRequestSchema.index({ fromUserId: 1 });
  ```

- If `fromUserId` must always be unique, **use**:
  ```javascript
  const connectionRequestSchema = new mongoose.Schema({
    fromUserId: { type: String, unique: true },
  });
  ```

(4) What are indexes in MongoDB ? Why do we need indexes in DB? What is the advantages and disadvantages of creating?

### **What are Indexes in MongoDB?**

Indexes in MongoDB are special data structures that store a portion of the dataset in a way that is optimized for efficient query execution. They allow MongoDB to quickly locate documents in a collection without scanning the entire dataset.

For example:
- Without an index: MongoDB scans every document in the collection (full collection scan) to find matches.
- With an index: MongoDB uses the index to directly locate the matching documents.

### **Why Do We Need Indexes in a Database?**

Indexes are essential for improving query performance, especially as the size of the dataset grows. They are critical in the following scenarios:

1. **Fast Query Execution**:
   - Queries on indexed fields are significantly faster than those on non-indexed fields.

2. **Sorting**:
   - Indexes can improve the performance of queries that sort results.

3. **Efficient Filtering**:
   - Indexes enable MongoDB to quickly filter and retrieve documents based on specific conditions.

4. **Supporting Unique Constraints**:
   - Indexes can enforce uniqueness in fields (e.g., email addresses).

---

### **Advantages of Indexes**

1. **Faster Query Performance**:
   - Queries on indexed fields are much quicker as they avoid a full collection scan.

2. **Improved Scalability**:
   - As datasets grow larger, indexes ensure consistent query performance.

3. **Efficient Sorting**:
   - Sorting operations on indexed fields are more efficient.

4. **Support for Uniqueness**:
   - Unique indexes enforce data integrity by preventing duplicate values in a field.

5. **Compound Indexes**:
   - These allow queries on multiple fields to be optimized.

---

### **Disadvantages of Indexes**

1. **Increased Storage Usage**:
   - Indexes require additional disk space, which can significantly increase storage requirements, especially for large datasets.

2. **Slower Write Performance**:
   - Insert, update, and delete operations are slower because MongoDB must update all relevant indexes in addition to modifying the document.

3. **Memory Overhead**:
   - Indexes are stored in memory for fast access. If the number of indexes exceeds available memory, performance can degrade as MongoDB falls back to disk.

4. **Index Management Overhead**:
   - Maintaining and updating indexes can add complexity, especially in dynamic applications where fields and query patterns change frequently.

5. **Potential Query Planner Confusion**:
   - With too many indexes, MongoDB’s query planner may choose a less optimal index, resulting in slower queries.

---

### **When to Use Indexes**

Indexes are beneficial when:
- You frequently query or filter data by a specific field (e.g., `emailId`, `username`).
- You need to sort data often by a field.
- You enforce uniqueness constraints (e.g., `unique: true` for emails).
- You run complex queries involving multiple fields (use **compound indexes**).

---

### **When Not to Use Indexes**

Avoid overusing indexes when:
- You have fields with low cardinality (e.g., boolean fields with only `true`/`false` values).
- Your application performs frequent writes and updates. Too many indexes can slow these operations.
- The field is rarely used in queries.

---

### **Key Takeaways**

- **Indexes are crucial for read-heavy applications**: They improve query and sorting performance dramatically.
- **Indexes can hurt performance in write-heavy applications**: Each write operation requires maintaining the indexes, which can slow down inserts, updates, and deletes.
- **Proper Index Design is Key**: Analyze your query patterns to determine which fields and combinations of fields need indexing. Use tools like `explain()` in MongoDB to identify query bottlenecks and optimize index usage.

(5) What is $or query and $and query in mongoose? Tell me about other quereies too ?

### **`$or` Query in Mongoose**

The `$or` operator is used to match documents that satisfy **at least one condition** in an array of conditions. It performs a logical OR operation.

**Syntax**:
```javascript
Model.find({
  $or: [
    { field1: condition1 },
    { field2: condition2 },
  ],
});
```

**Example**:
```javascript
User.find({
  $or: [{ age: { $gte: 18 } }, { role: "admin" }],
});
```
- This query finds users who are either 18 years or older **OR** have the role of "admin".

---

### **`$and` Query in Mongoose**

The `$and` operator matches documents that satisfy **all the conditions** in an array of conditions. It performs a logical AND operation.

**Syntax**:
```javascript
Model.find({
  $and: [
    { field1: condition1 },
    { field2: condition2 },
  ],
});
```

**Example**:
```javascript
User.find({
  $and: [{ age: { $gte: 18 } }, { role: "admin" }],
});
```
- This query finds users who are **both** 18 years or older **AND** have the role of "admin".

---

### **Other Common Mongoose Queries**

1. **`$in` Query**:
   - Matches documents where the field value is in an array of specified values.
   ```javascript
   User.find({ role: { $in: ["admin", "editor"] } });
   ```
   - Finds users with roles "admin" or "editor".

2. **`$nin` Query**:
   - Matches documents where the field value is **not** in an array of specified values.
   ```javascript
   User.find({ role: { $nin: ["admin", "editor"] } });
   ```

3. **`$eq` and `$ne` Query**:
   - `$eq`: Matches documents where the field value equals the specified value.
   ```javascript
   User.find({ age: { $eq: 25 } });
   ```
   - `$ne`: Matches documents where the field value is **not** equal to the specified value.
   ```javascript
   User.find({ age: { $ne: 25 } });
   ```

4. **`$gt`, `$gte`, `$lt`, `$lte` Queries**:
   - Used for greater than, greater than or equal to, less than, and less than or equal to conditions.
   ```javascript
   User.find({ age: { $gte: 18, $lte: 30 } });
   ```

5. **`$exists` Query**:
   - Matches documents where the field exists (or does not exist).
   ```javascript
   User.find({ phoneNumber: { $exists: true } });
   ```

6. **`$regex` Query**:
   - Matches documents where the field value matches a regular expression.
   ```javascript
   User.find({ name: { $regex: /^J/, $options: "i" } });
   ```
   - Finds users whose names start with "J" (case-insensitive).

7. **`$all` Query**:
   - Matches documents where the field contains all the specified elements.
   ```javascript
   User.find({ tags: { $all: ["sports", "music"] } });
   ```

8. **`$size` Query**:
   - Matches documents where an array field has a specific number of elements.
   ```javascript
   User.find({ skills: { $size: 3 } });
   ```

9. **`$type` Query**:
   - Matches documents where the field is of a specified BSON type.
   ```javascript
   User.find({ age: { $type: "number" } });
   ```

10. **`$not` Query**:
    - Matches documents that do **not** satisfy a specified condition.
    ```javascript
    User.find({ age: { $not: { $gte: 18 } } });
    ```

11. **`$elemMatch` Query**:
    - Matches documents where at least one element of an array field satisfies all specified conditions.
    ```javascript
    User.find({
      scores: { $elemMatch: { subject: "math", score: { $gte: 80 } } },
    });
    ```

12. **`$text` Query**:
    - Used for full-text search in text indexes.
    ```javascript
    User.find({ $text: { $search: "developer" } });
    ```

---

### **Combining Queries**

You can combine multiple operators for complex queries:
```javascript
User.find({
  $and: [
    { $or: [{ age: { $gte: 18 } }, { role: "admin" }] },
    { active: true },
  ],
});
```
- Finds users who are either 18 or older **or** have the role "admin", and are **active**.

By understanding and using these query operators effectively, you can craft powerful and efficient queries to retrieve data from MongoDB.

 
(6). If index makes query faster then why we don't add it in every field ? Why we should not create lot of indexes into the DB?

While indexes improve query performance, they come with trade-offs, which is why you shouldn’t add an index to every field. Here are the main reasons:

### **1. Increased Storage Use**
- Indexes consume additional disk space. For each index you create, MongoDB needs to maintain a copy of the indexed field(s) in a data structure optimized for quick lookups. With too many indexes, your database size can grow significantly.

### **2. Slower Write Operations**
- Every time you perform a write operation (e.g., insert, update, or delete), MongoDB must update all the relevant indexes. If you have many indexes, this overhead can slow down write performance.

### **3. Diminished Returns**
- Not all fields are queried frequently. Adding indexes to rarely-used fields doesn’t justify the overhead they introduce. Indexes should be created only on fields that are used often in filters, sorting, or joins.

### **4. Memory and Performance Overhead**
- Indexes are stored in memory for fast access. If you have too many indexes, your system may run out of memory, forcing MongoDB to read from disk, which is slower.

### **5. Query Planner Complexity**
- Having too many indexes can make it harder for MongoDB’s query planner to choose the optimal index for a query, leading to suboptimal query performance.

---

### **Best Practices for Indexes**
1. **Index High-Frequency Query Fields**: Only create indexes on fields that are frequently used in queries or sorting.
2. **Avoid Low-Cardinality Indexes**: Fields with a small number of distinct values (e.g., boolean fields like `isActive`) don’t benefit much from indexing.
3. **Use Compound Indexes Where Relevant**: Instead of creating multiple single-field indexes, use compound indexes for queries involving multiple fields.
4. **Monitor and Analyze**:
   - Use tools like MongoDB’s `explain()` to determine which indexes are being used.
   - Remove unused indexes periodically.

Indexes are essential for performance optimization, but their design requires careful consideration based on the application’s query patterns and workload. Over-indexing can lead to more harm than good, especially in write-heavy applications.
-------------------------------

     jwt.sign
     bcrypt.compare









************** Cloning a repo **************

          For git repo, if i made the repo first then either i can come to pc and create folder inside that open cmd and git clone link of repo and clone it and open that 
          folder in vs code or i can directly come to vs code and click on clone the repository and it will then ask me the folder where i want to clone it and i can choose 
          that folder and clone it.
          but if i started the code and haven't created the repository then i can do git init to iniitalise it then git add . then git commit -m "commit files" and now push 
          it to the github so will go on github and create a new repo and map it to the repository by adding 3 commands which wil be mentioned there only when we create the 
          repository.
          git remote add origin
          git branch -M main
          git push -u origin main


************** Server Create **************

------------------ creating server in nodejs ------------------

     const http = require("http");
     
     const server = http.createServer(function(req, res) {
          if(req.url === "/getSecretData"){
               res.end("There is no secret data");
               }
               res.end("Hello World!!!");
               });
               
     server.listen(7777);

------------------ creating server in express ------------------

     const express = require("express");
     
     const app = express();
     
     app.listen(7777, () => {
          console.log("Server is successfully listening on port 7777...");
          });



------------------ Api ------------------
signup API

Validation of data
Encrypt the password
create new isntance 
save in DB
send response

login API

validate email
compare password(decrypt)
create jwt token
send it in cookie
send response


Profile API

Get coookies
get token from cookies
validate token
JWT verify
get id from deocded msg got after JWT verify 
FIND USER 
if found Send user as response


------------------ Resume ------------------



 user can come and login and in noida all theka will be tied up with us and we will deliver to the place

RESUME

Project#7 Client : Autopedia (Qexon)  1 year and 1 month.      (May 2018 to June 2019)

Project#5 Client : Growth Ai (Muoro).  8 months.                           (April 2020 to December 2020)

Project#3 Client : Suburban jungle Inc. (Muoro)  11 months.   (May 2022 to April 2023)


in chatgpt i want to create a description for Suburban jungle Inc. project and worked in react in frontend and tell me details what company does, what project does?
to know abt project , ye project kya krta h ,kya tech stack tha, kya folder structure ho skta tha... what uh did tell me the big services taht i did so i can tell to interviewer
like oAuth for login autehntaction authorization.

5-6 topics need to remember like AUTHENTICATION, Templates bnaye tha data aane p and work for every projevct just domain change h..

 timelines 1 - 1sal and 2 project together for 1 year

by bro

Project#3 Client : Suburban jungle Inc. => Like MMT but in MMT there are flights too but yaha p house k liye hota h florida street m jayda h rent p dena yaa 1-1 din k liye 
dena 

Growth Ai  => Hackarearth, Hackarthon for some college and genralise kr rhi thi liek making micro frontend like we have two differnet collesges and we can provide it to both easily like domain can change easily.

koi bhi stuendt ayega enroll kia and 1st year btech test krvane h enroll krenge test krenge and they also include AI in backend as AI se we can get ansers shi h ya nihi asia portakl tha


Autopedia => Vintage cars like ferrari so this comany sell or rent the cars but only vintafe and made UI 

meri company p project aaye the .. har project k aage se company htado bcoz client can give the project to other service based comp. too.

i dont know the insights of my company how would i know.. no one asked for hosted link as i dont hvae knowlege that internal and i didnt hosted..


EC2 service, Lambda function, dynamoDB, S3 buckets, CI/CD pipelines, Docker, Kubannatives..

Docker ki comands hoti h, kaise image bnti h, deployment aise hote h... 


kaam kia tha?

not yes not no

project m use ho rha tha and we work toghether so i use to see in devops and i have an idea and then giive technical

micro services so ither term handlinng aoyment thuing 


AWS integration.