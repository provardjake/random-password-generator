// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var passLength = prompt("Please enter the length of your password between 8 and 128: ");
  if(!passLength){
    return;
  }
  passLength = parseInt(passLength);
  console.log(passLength);

   if (Number.isInteger(passLength) === false){
     alert("Please enter a number");
     generatePassword();
  }
  if (passLength < 8 || passLength > 128){
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
