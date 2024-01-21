//This function will run when login button is clicked
//set credentials to log in and validate
    let uname = "admin";
    let pword = "pass1234"

    //validate username and password
    function logMein(username,password) {
        if (username === uname && password === pword) {
            alert('Login successfull!');
            //Redirect to register.html. Enter code here 

        } else {
            alert('Invalid username or password. Please try again.');
        }
    


}