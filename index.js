function web47(){
    console.log("web 47");
 }

 /*
inject arguments from command line
 */
 function injectVariables(){
     console.log("process.argv = ", process.argv)
     console.log("index 2 = ", process.argv[2])
 }
 injectVariables();

 /*
these environmental variables are used for various purposes
 */
 function viewEnvironmentVariables(){
     console.log("environment variables = ", process.env);
 }
viewEnvironmentVariables();

/*
What are environmental variables are used?
Some values cannot be stored in the application.
These sensitive values include:
_private key, _passwords, _username, _API-key, _token.
*/

/*
How to inject sensitive data into our program through environmental variables?
By run the following code in the command line
 'FOO="lady gaga" node index.js'
*/

/*
What are the two ways to provide input into a node application?
There are two ways to provide input into a node application:
_command line argument (node index.js 45 56 67)
_using environmental variable to pass the variables into a node application
*/

/*
npx gitignore node - create a git ignore for node package
git init -create a git repo
npm i express
npm i
npx eslint --init, then select default
npm i -D nodemon
npm i dotenv
inside package.json, add the below lines
 _"start":"node index.js"
 _"sever":"nodemon index.js"
*/

/*
checklist to ensure API is deployable
_insert "start":"node index.js" in package.json file
_const PORT = process.env.PORT || 5000 in index.js
*/

//continue at 49:20
//https://www.youtube.com/watch?v=c6wjuGfRF6E&list=WL&index=2