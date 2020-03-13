// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  return "";
}



// let lowerCaseChars = all the lowercase characters
// let upperCaseChars = all the uppercase characters
// let numberChars = all the number characters
// let special = all the allowed special characters

// When the user clicks generate
// prompt user for number of chars
// save result in variable called passwordLength

// IF passwordLength is greater than 7 and less than 129
//   assign each of the following results to variables
//   let useNums = confirm user want to use numbers
//   let useLcase = confirm user wants lowercase characters
//   let useUcase = confirm user wants uppercase
//   let useSpecial = confirm user wants special chars
//   IF (useNums = true) OR (useLCase = true) OR (useUcase = true) OR (useSpecial = true)
//     call generate password
//     display the password
//   END IF
// END IF

// IF passwordLength is <= 7 or >= 129
//   alert user that password length needs to be 8 to 128
// END IF

// GENERATE PASSWORD
// let password = an empty string
// IF useLcase = true
//   randomly pick a lower case letter
//   add it to password
// END IF







// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page