// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password generation prompts
function generatePassword() {
  var passwordLength = Number(prompt("Choose a length for your password between 8 and 128 characters"))
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid input, please choose a number between 8 and 128")
    return
  } else if (isNaN(passwordLength)) {
    window.alert("Invalid input, please choose a number between 8 and 128")
    return
  }
  console.log("Password length: " + passwordLength)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
