// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character types 
var charLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var charNum = ["0","1","2","3","4","5","6","7","8","9"]
var charSpecial = ["\u0020","\u0021","\u0022","\u0023","\u0024","\u0025","\u0026","\u0027","\u0028","\u0029","\u002A","\u002B","\u002C","\u002D","\u002E","\u002F","\u003A","\u003B","\u003C","\u003D","\u003E","\u003F","\u0040","\u005B","\u005C","\u005D","\u005E","\u005F","\u0060","\u007B","\u007C","\u007D","\u007E"]

// Password generation prompts
function generatePassword() {
  var passwordLength = Number(prompt("Choose a length for your password between 8 and 128 characters"))
  // Limit accepted inputs to between 8 and 128 inclusive and reject non numerical inputs
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Invalid input, please choose a number between 8 and 128")
    var passwordLength = Number(prompt("Choose a length for your password between 8 and 128 characters"))
  } 
  console.log("Password length: " + passwordLength)
  
  var choiceLower = confirm("Would you like your password to include lowercase characters?")
  console.log("Inludes lowercase characters: " + choiceLower)
  var choiceUpper = confirm("Would you like your password to include uppercase characters?")
  console.log("Inludes uppercase characters: " + choiceUpper)
  var choiceNum = confirm("Would you like your password to include numbers?")
  console.log("Inludes numbers: " + choiceNum)
  var choiceSpecial = confirm("Would you like your password to include special characters?")
  console.log("Inludes special characters: " + choiceSpecial)

  while (!choiceLower && !choiceUpper && !choiceNum && !choiceSpecial) {
    window.alert("Please choose at least one character type")
    var choiceLower = confirm("Would you like your password to include lowercase characters?")
    var choiceUpper = confirm("Would you like your password to include uppercase characters?")
    var choiceNum = confirm("Would you like your password to include numbers?")
    var choiceSpecial = confirm("Would you like your password to include special characters?")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
