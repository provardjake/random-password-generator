// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generates a random number between two given numbers. 
function getRdmInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function generatePassword(){
  var isUpperCase;
  var isLowerCase;
  var isNumeric;
  var isSpecial;
  var password;
  var rdmCharType;
  var passArray = [];
  var charTypes = [];
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "`~!@#$%^&*()-_=+[{]};:,<.>/?";
  var upperCaseCharArray = upperCaseChar.split("");
  var lowerCaseCharArray = lowerCaseChar.split("");
  var specialCharArray = specialChar.split("");
  var rdmUpperCase;
  var rdmLowerCase;
  var rdmSpecial;

  var passLength = prompt("Please enter the length of your password between 8 and 128: ");

  //ends the function if the user selects cancel
  if(!passLength){
    return;

  }
  //changes the input from the prompt from a string to an integer
  passLength = parseInt(passLength);

  //checks if passLength is a number, if it isn't, asks to enter a number and prompts again. 
  if (Number.isInteger(passLength) === false){
    alert("Please enter a number");
    generatePassword();

  }

  //Checks that the password length is between 8 and 128 charaters
  if (passLength < 8 || passLength > 128){
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }

  isUpperCase = confirm("Would you like your password to contain upper case letters?");
  isLowerCase = confirm("Would you like your password to contain lower case letters?");
  isNumeric = confirm("Would you like your password to contain numbers?");
  isSpecial = confirm("Would you like your password to contain special charaters?");

  //Checks to make sure at least one character type is selected. 
  for(var i = 0; i < 1;){
    if (!isUpperCase && !isLowerCase && !isNumeric && !isSpecial){
      alert("Please select at least one character type for you password.")
      isUpperCase = confirm("Would you like your password to contain upper case letters?");
      isLowerCase = confirm("Would you like your password to contain lower case letters?");
      isNumeric = confirm("Would you like your password to contain numbers?");
      isSpecial = confirm("Would you like your password to contain special charaters?");
     }
    else{
     i++;
    }
  }
  charTypes = [isUpperCase, isLowerCase, isNumeric, isSpecial];



  for(var i = 0; i < passLength; i++){
    rdmCharType = getRdmInt(0, charTypes.length);
    //checks if the generated number is correlated with the character type was selected by the user. If it isn't, gets a new random number
    for (var x = 0; x < 1;){
      if(rdmCharType === 0 && charTypes[0] === false){
        rdmCharType = getRdmInt(0, charTypes.length);
      }
      else if(rdmCharType === 1 && charTypes[1] === false){
        rdmCharType = getRdmInt(0, charTypes.length);
      }
      else if(rdmCharType === 2 && charTypes[2] === false){
        rdmCharType = getRdmInt(0, charTypes.length);
      }
      else if(rdmCharType === 3 && charTypes[3] === false){
      rdmCharType = getRdmInt(0, charTypes.length);
      }
      else{
      x++;
      }
  }
    //adds a random character to the password for each the character types that was selected by the user
    if(rdmCharType === 0){
      rdmUpperCase = getRdmInt(0, upperCaseCharArray.length);
      passArray[i] = upperCaseCharArray[rdmUpperCase];
    }
    else if(rdmCharType === 1){
      rdmLowerCase = getRdmInt(0, lowerCaseCharArray.length);
      passArray[i] = lowerCaseCharArray[rdmLowerCase];
    }
    else if(rdmCharType === 2){
      passArray[i] = getRdmInt(0, 9);
    }
    else if(rdmCharType === 3){
      rdmSpecial = getRdmInt(0, specialCharArray.length);
      passArray[i] = specialCharArray[rdmSpecial];
    }
  }

  
  password = passArray.join("");
  alert("Your password is: \n\n"+password);
  return password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
