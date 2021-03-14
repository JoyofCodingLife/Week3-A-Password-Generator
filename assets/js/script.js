//Created by L.Korolyova @ 2021
//Generate Button and Event Listener to prompt questions when button pushed
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Various Arrays 
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;


// Password Generating Function
function generatePassword() {
  // Password Length
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters.\nPlease try again");
       var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
    alert ("Your passwold will have " + confirmLength + " characters");

 // Promts to select characters 
  var confirmSpecialCharacter = confirm("Click OK to include special characters");
  var confirmNumeric = confirm("Click OK to include numeric characters");    
  var confirmLowerCase = confirm("Click OK to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to include uppercase characters");

    // Loop if all 4 parameters are negative
      if (!confirmSpecialCharacter && !confirmNumeric && !confirmLowerCase && !confirmUpperCase){
      alert ("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to include special characters");
        var confirmNumeric = confirm("Click OK to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to include uppercase characters");
      }   

 // Password characters combination
   var passwordCharacters = []   
     if (confirmSpecialCharacter) {passwordCharacters = passwordCharacters.concat(specialCharacter)}
     if (confirmNumeric) {passwordCharacters = passwordCharacters.concat(numeric)}
     if (confirmLowerCase) {passwordCharacters = passwordCharacters.concat(lowerCase)}
     if (confirmUpperCase) {passwordCharacters = passwordCharacters.concat(upperCase)}
   console.log(passwordCharacters)

 // Formula to generate random password based on all configurations
   var randomPassword = ""   
     for (var i = 0; i < confirmLength; i++) {
       randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
       console.log(randomPassword)
     }
     return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Copy Button and Function to copy the generated password
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}


// Reset Button and Function to reset the generated password
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetPassword);

function resetPassword() {
  window.location.reload();
}
