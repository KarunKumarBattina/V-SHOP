function validation()
{
    let username = document.getElementById("username").value;
    let alphaExp = /^[A-Za-z]+$/;
    let userStatus = false;
    

    let email = document.getElementById("email").value;
    let emailExp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailStatus = false;

    //user name

    if(username ===""){
        document.getElementById("nameNote").innerHTML="Name is Mandatory";
    }else{
        if(username.match(alphaExp)){
            document.getElementById("nameNote").innerHtml="";
            userStatus=true;
        }else{
            document.getElementById("nameNote").innerHTML="Only Characters";
            userStatus=false;
        }
    }

 

    //email address
    if(email===""){
        document.getElementById("emailNote").innerHTML="Email Address Is Mandatory";
    }else{
        if(email.match( emailExp)){
            document.getElementById("emailNote").innerHTML="";
            emailStatus=true;
        }else{
            document.getElementById("emailNote").innerHTML="Provide proper email address (ex:name@gmail.com)";
            emailStatus=false;
        }
    }
    
    if(userStatus === true && emailStatus === true){
        return true;
    } else{
        return false;
    }
    
}

