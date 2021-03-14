//Generate Button + Event Listener to prompt questions when button pushed
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Copy button and function to copy the generated password
var copy = document.querySelector("#copy");
copy.addEventListener("click", copyPassword);

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}


// Various Arrays 
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// Questions to configure the password
function passwordOptions () {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

    // Loop if answer is outside the parameter of at least 8 characters and no more than 128 characters
      while (confirmLength <=7 || confirmLength >= 129){
      alert ("Password length must be between 8-128 characters, please try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      }
    // Output result
      alert ("Your passwold will have " + confirmLength + " characters");

  // Confuguration of characters
  var confirmSpecialCharacter = confirm ("Click OK to confirm if you would like to include SPECIAL characters");
  var confirmNumericCharacter = confirm ("Click OK to confirm if you would like to include NUMERIC characters");
  var confirmLowerCase = confirm ("Click OK to confirm if you would like to include LOWERCASE characters");
  var confirmUpperCase = confirm ("Click OK to confirm if you would like to include UPPERCASE characters");
      
    // Loop if all 4 parameters are negative
      if (!confirmSpecialCharacter && !confirmNumericCharacter && !confirmLowerCase && !confirmUpperCase){
        alert ("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm ("Click OK to confirm if you would like to include SPECIAL characters");
        var confirmNumericCharacter = confirm ("Click OK to confirm if you would like to include NUMERIC characters");
        var confirmLowerCase = confirm ("Click OK to confirm if you would like to include LOWERCASE characters");
        var confirmUpperCase = confirm ("Click OK to confirm if you would like to include UPPERCASE characters");
      }

  var passwordOptions = {
    includeSpecialChar: confirmSpecialCharacter,
    includeNumeric: confirmNumericCharacter,
    includeLowerCase: confirmLowerCase,
    includeUpperCase: confirmUpperCase
  }

  return passwordOptions;
}

// Password Generator
function generatePassword() {

  var options = passwordOptions();
  console.log(options);

  var passwordCharacters = [];
  console.log(passwordCharacters)

  if (options.includeSpecialChar) {passwordCharacters =  passwordCharacters.concat(specialChar)}
  if (options.includeNumeric) {passwordCharacters =  passwordCharacters.concat(numericChar)}
  if (options.includeLowerCase) {passwordCharacters =  passwordCharacters.concat(lowerCaseChar)}
  if (options.includeUpperCase) {passwordCharacters =  passwordCharacters.concat(upperCaseChar)}

  var randomPassword = []
   for (var i = 0; i < confirmLength; i++){
     randomPassword = randomPassword + passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
     console.log(randomPassword)
   } 
   return randomPassword.join('');
}

// Display password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}