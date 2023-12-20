function validate(){
    var username = document.getElementById("fname").value;

    if(username == ""){
        document.getElementById("fnm").innerHTML = "*Please Enter Your Name";
        return false;
        }
        if(!isNaN(username)){
        document.getElementById("fnm").innerHTML = "*Please Enter Characters only";
        return false;
        }
        
    var lastname = document.getElementById("lname").value;

    if(lastname == ""){
        document.getElementById("lnm").innerHTML = "*Please Enter Your Name";
        return false;
        }
        if(!isNaN(lastname)){
        document.getElementById("lnm").innerHTML = "*Please Enter Characters only";
        return false;
        }

    var email = document.getElementById("emails").value;

    if(email == ""){
        document.getElementById("eml").innerHTML = "Please Enter Your Email";
        return false;
        }
        var emailformat = /^[a-z A-Z 0-9 \_\.\-]+\@[a-z A-Z]{2,6}[.]{1}[a-z]{2,4}[.]{0,1}[a-z]{0,2}$/;
        if(emailformat.test(email)){
        document.getElementById("eml").innerHTML = "";
        }else{
        document.getElementById("eml").innerHTML = "Please Enter correct email format";
        return false;
        }

    var number = document.getElementById("num").value;
    
    if(number == ""){
        document.getElementById("nm").innerHTML = "Please Enter Your Contact number";
        return false;
        }
        if(isNaN(number)){
        document.getElementById("nm").innerHTML = "Please Enter Your number only";
        }

    
    
    
    
    var pasword = document.getElementById("pass").value;

    if(pasword == ""){
        document.getElementById("pas").innerHTML = "Please Enter Your Password";
        return false;
        }
        var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(pass.test(password)){
        document.getElementById("pas").innerHTML = "";
        }else{
        document.getElementById("pas").innerHTML = "Please enter Minimum 8 characters at least 1 Alphabet and 1 Number";
        return false;
        }

    var cpasword = document.getElementById("cpass").value;

    if(cpasword == ""){
        document.getElementById("cpas").innerHTML = "Please Enter Your Confirm Password";
        return false;
        }
        if((cpasword.length < 1) ||(cpasword.length > 12)){
        document.getElementById("cpas").innerHTML = "Please Enter Your Password between 1 to 12 characters";
        return false;
        }
        if(pasword !== cpasword){
        document.getElementById("cpas").innerHTML = "password is not matched with confirm password.";
        return false;
        }

    var checkbox = document.getElementById("checkbox");

    if(checkbox.checked == false){
        document.getElementById("chk").innerHTML ="*Please check Privacy Policy";
        return false;
        }
        

}

function login(){
   var email = document.getElementById("emails").value;
    var pasword = document.getElementById("pass").value;

    if(email == ""){
    document.getElementById("eml").innerHTML = "Please Enter Your Email";
    return false;
    }
    var emailformat = /^[a-z A-Z 0-9 \_\.\-]+\@[a-z A-Z]{2,6}[.]{1}[a-z]{2,4}[.]{0,1}[a-z]{0,2}$/;
    if(emailformat.test(email)){
    document.getElementById("eml").innerHTML = "";
    }else{
    document.getElementById("eml").innerHTML = "Please Enter correct email format";
    return false;
    }

    if(pasword == ""){
    document.getElementById("pas").innerHTML = "Please Enter Your Password";
    return false;
    }
    var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(pass.test(password)){
    document.getElementById("pas").innerHTML = "";
    }else{
    document.getElementById("pas").innerHTML = "Please enter Minimum 8 characters at least 1 Alphabet and 1 Number";
    return false;
    }
    
    

    
  }