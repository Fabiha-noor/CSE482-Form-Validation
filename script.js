function validateForm(){

    var username =document.getElementById("username").value;
	var password =document.getElementById("password").value;
  var email=document.getElementById("email").value;
    var email=document.getElementById("contact").value;
    

   if(username.trim()==""){
   	alert("Blank is invalid!");
   	return false;
   }
  
   var checkname =/nsu/g;
   if(!username.trim().match(checkname)){
    	alert("username must contain with nsu!");
   	return false;
 }

var password = /^[0-9a-zA-Z]{7,20}$/;

  if (!password.trim().match(password)) {
    alert("password must be a valid value");
    return false;
  }
 
  var numeric = 0;
  var uppercase = 0;
  var character = "";
  var passwordStrings = password.toString();
  for (var i = 0; i < passwordStrings.length; i++) {
    character = passwordStrings.charAt(i);
    console.log(character);
    if (!isNaN(character)) {
      numeric = 1;
    } else if (character == character.toUpperCase()) {
      uppercase = 1;
    }
  }
  if (numeric == 0 || uppercase == 0) {
    alert(" Must contain (at least) 2Numeric values, 1 Uppercase letter, 1 Lowercase letter");
    return false;
  } else return true;

   var specialChar = /^[!@#$%^&*()_+=-~`)]$/;
  if (password.trim().match(specialChar)) {
    alert("special characters are not allowed");
    return false;
  }



  var emailCheck = /@gmail./;
  if (email.trim().match(emailCheck)) {
    alert("email must be valid");
    return false;
  }

if (contactString.length < 11) {
    alert("enter a valid contact number");
    return false;
  }
 
 

   else 
   	return true;

}
