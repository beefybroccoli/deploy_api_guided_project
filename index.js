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