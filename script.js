var generateBtn = document.querySelector("#generate");

// Assignment Code
// let lowerCaseChars = all the lowercase characters
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let upperCaseChars = all the uppercase characters
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// let numberChars = all the number characters
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// let special = all the allowed special characters
var specialChars = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];


// When the user clicks generate
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// GENERATE PASSWORD
// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.

function generatePassword() {
    // prompt user for number of chars
    // save result in variable called passwordLength
    var passwordLength = prompt("How many characters do you want the password to be?");

// IF passwordLength is greater than 7 and less than 129
    //THEN user select which criteria to include in the password
    if (passwordLength > 7 && passwordLength < 129) {
        var useLcase = confirm("Do you want to include lower case characters?");
        var useUcase = confirm("Do you want to include upper case characters?");
        var useNums = confirm("Do you want to include numbers?");
        var useSpecial = confirm("Do you want to include special characters?");
    }

    // IF passwordLength is <= 7 or >= 129
    else {
        //  alert user that password length needs to be 8 to 128
        alert("Password length must be at least 8 to 128 characters long");
    }

// let password = an empty string
    var password = "";

// create a loop that randomly selects 1 character from each array
    // set conditions so the pw length matches user input
    for (i = 0; i < passwordLength;) {

    // IF (useNums = true) OR (useLCase = true) OR (useUcase = true) OR (useSpecial = true) & still less than user input
    if ((useLcase === true) && i < passwordLength) {
    
    // add to password
            password = password + lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
            i++;
        }

    // repeat for each array
        if ((useUcase === true) && i < passwordLength) {
            password = password + upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
            i++;
        }

        if ((useNums === true) && i < passwordLength) {
            password = password + numberChars[Math.floor(Math.random() * numberChars.length)];
            i++;
        }

        if ((useSpecial === true) && i < passwordLength) {
            password = password + specialChars[Math.floor(Math.random() * specialChars.length)];
            i++;
        }

    }
    // display password
    return password;
};
