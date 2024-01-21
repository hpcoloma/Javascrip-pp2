//This function will run when login button is clicked
    function logMein() {
        //set credentials to log in
              
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let uname = "admin";
        let pword = "pass1234";

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        } else if (username === uname && password === pword) {
            alert('Login successfull!');
            //Redirect to register.html. Enter code here 

        } else {
            alert('Invalid username or password. Please try again.');
        }
    


}