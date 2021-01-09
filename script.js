function validation(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var post = document.getElementById('post').value;

    //regular Expression
    var usercheck = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
    var passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    var emailcheck = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var mobilecheck = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;     // Bangladeshi mobile number
    var postcheck = /\d{4}/;    //Bangladeshi post code

    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML="";
    }else{
        document.getElementById('usererror').innerHTML="**Username is Invalid !";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML="";
    }else{
        document.getElementById('passworderror').innerHTML="**Password is Invalid !";
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('cpassworderror').innerHTML="";
    }else{
        document.getElementById('cpassworderror').innerHTML="**Password is not Matching !";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML="";
    }else{
        document.getElementById('emailerror').innerHTML="**Email is Invalid !";
        return false;
    }

    if(mobilecheck.test(mobile)){
        document.getElementById('mobileerror').innerHTML="";
    }else{
        document.getElementById('mobileerror').innerHTML="**Mobile Number is Invalid !";
        return false;
    }

    if(postcheck.test(post)){
        document.getElementById('posterror').innerHTML="";
    }else{
        document.getElementById('posterror').innerHTML="**Post Code is Invalid !";
        return false;
    }
}