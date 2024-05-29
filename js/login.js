var valid

function validateEmail(){
    let email = document.getElementById('email').value
    if (email == ""){
        document.getElementById('errors').innerHTML = "Please enter your email address!"
        valid = false;
    } 
    else if (email.includes(' ') || email.includes("..") || email.includes("@.") || !email.includes('@') || !email.endsWith('.com') || email.startsWith('@') || email.startsWith('.') || email.endsWith('.') || email.indexOf('@')!=email.lastIndexOf('@')){
        document.getElementById('errors').innerHTML = "Please enter valid email address!"
        valid = false;
    }
    else if(valid){
        document.getElementById('errors').innerHTML = ""
    } 
}

function validateUsername(){
    let username = document.getElementById('username').value
    if (username == ""){
        document.getElementById('errors').innerHTML = "Please enter your username!"
        valid = false;
    }    
    else if(username.length<8 || username.length>20){
        document.getElementById('errors').innerHTML = "Username must be between 8-20 characters long!"
        valid = false;
    }
    else if(valid){
        document.getElementById('errors').innerHTML = ""
    }
}

function validatePhoneNumber(){
    let phoneNumber = document.getElementById('phoneNumber').value
    if(phoneNumber == ""){
        document.getElementById('errors').innerHTML = "Please enter your phone number!"
        valid = false;
    } else if(isNaN(phoneNumber) || phoneNumber.length < 10){ //isNaN => is not a number
        document.getElementById('errors').innerHTML = "Please enter valid phone number!"
        valid = false;
    } else if(valid){
        document.getElementById('errors').innerHTML = ""
    }
}

function validatePassword(){
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    if (password == ""){
        document.getElementById('errors').innerHTML = "Please enter your password!"
        valid = false;
    }
    else if(password.length<8){
        document.getElementById('errors').innerHTML = "Password must be at least 8 characters!"
        valid = false;
    }
    else if(password != confirmPassword){
        document.getElementById('errors').innerHTML = "Confirm your password!"
        valid = false;
    }
    else if(valid){
        document.getElementById('errors').innerHTML = ""
    }
}

function validateAgreement(){
    let agreement = document.getElementById('agreement').checked
    if (agreement == false){
        document.getElementById('errors').innerHTML = "You have to agree to our terms and services!"
        valid = false;
    }
    else if(valid){
        document.getElementById('errors').innerHTML = ""
    } 
}

function submitData(x){
    valid = true;
    validateAgreement()
    validatePassword()
    validatePhoneNumber()
    validateEmail()
    validateUsername()

    if(valid == false){
        x.preventDefault();
    }
    else{
        let submit = confirm("Submit data?")
        if (submit == true){
            alert("Login Success!")
        }
        else{
            x.preventDefault();
        }
    }
}

function showPassword(){
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let show = document.getElementsByClassName("show");

    if (password.type == "password") {
      password.type = "text";
      confirmPassword.type = "text";
      show[0].style.color = "#303030";
      show[1].style.color = "#303030";
      show[0].innerHTML = 'Hide Password'
      show[1].innerHTML = 'Hide Password'
    } else {
      password.type = "password";
      confirmPassword.type = "password";
      show[0].style.color = "#3030307b";
      show[1].style.color = "#3030307b";
      show[0].innerHTML = 'Show Password'
      show[1].innerHTML = 'Show Password'
    }  
}