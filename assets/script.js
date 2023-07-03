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
  var isUpperCase;
  var isLowerCase;
  var isNumeric;
  var isSpecial;
  var passLength = prompt("Please enter the length of your password between 8 and 128: ");
  if(!passLength){
    return;
  }
  //changes the input from the prompt from a string to an integer
  passLength = parseInt(passLength);
  console.log(passLength);

  //checks if passLength is a number, if it isn't, asks to enter a number and prompts again. 
  if (Number.isInteger(passLength) === false){
    alert("Please enter a number");
    generatePassword();

  }

  //Checks that the password length is between 8 and 12 charaters
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




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
