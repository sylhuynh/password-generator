var generateBtn = document.querySelector("#generate");

// Assignment Code
// let lowerCaseChars = all the lowercase characters
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let upperCaseChars = all the uppercase characters
var upperCaseChars = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// let numberChars = all the number characters
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// let special = all the allowed special characters
var specialChars = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{" ,"|", "}", "~"]; 


// When the user clicks generate
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // prompt user for number of chars
  // save result in variable called passwordLength
  var passwordLength = prompt("How many characters do you want the password to be?");
  
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  // var password = generatePassword();

 // IF passwordLength is greater than 7 and less than 129
  //   assign each of the following results to variables
  //   let useNums = confirm user want to use numbers
  //   let useLcase = confirm user wants lowercase characters
  //   let useUcase = confirm user wants uppercase
  //   let useSpecial = confirm user wants special chars
  
  if (passwordLength > 7 && passwordLength < 129) {
    var useLcase = confirm("Do you want to include lower case characters?");
    var useUcase = confirm("Do you want to include upper case characters?");
    var useNums = confirm("Do you want to include numbers?");
    var useSpecial = confirm("Do you want to include special characters?");
    
  //   // IF (useNums = true) OR (useLCase = true) OR (useUcase = true) OR (useSpecial = true)
  //   if (useLcase === true || useUcase === true || useNums === true || useSpecial === true) {
  //     // call generate password
  //     // display the password
  //     generatePassword();
  // }
    }
  else {
    alert("Password length must be at least 8 to 128 characters long");
  }
};
