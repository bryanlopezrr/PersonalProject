function hidePassword(){

    /* 
    process.argv is an array containing the command line arguments. 
    The first element will be 'node', the second element will be the name of the JavaScript file. 
    The next elements will be any additional command line arguments.

    To run the email service you have to run:
        npm run dev username password
    */

    password = process.argv[5];

    console.log("THIS IS YOUR PASSWORD : " + password)

    return password;
}

function hideUser(){
    username = process.argv[4];

    console.log("THIS IS YOUR USER NAME : " + username)

    return username; 
}

module.exports = {
    USER: hideUser(),
    PASS: hidePassword()
}




//create a mock email to get all emails to isolate personal email from requests coming from the website