// Assignment code here

// ALL STRINGS, ARRAYS, AND \numbers\
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":",
    ";", "<", "=", ">", "?", "@", "[", "^", "_", "|", "~"]

// ACCESS GENERATE BUTTON IN HTML DOC TO BEGIN PW GENERATOR
var generateBtn = document.querySelector("#generate");

// ASK USER FOR PW \length\ DESIRED BETWEEN 8-128 MAX CHAR.
function generatePassword() {
    var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert("Your Password length must be between 8 and 128 characters");
        generatePassword();
    }
    return shufflePassword(passwordLength);
}
// FUNCTION FOR PW TO BE GENERATED BASED OFF OF PREVIOUS \length\ AND \confirm\ PROMPTS
function shufflePassword(passwordLength) {
    var userChoices = [];

    var includeNumbers = window.confirm(
        "Would you like to include numbers in your password?");
    if (includeNumbers) {
        number.forEach(function (num) {
            userChoices.push(num);
        });
    }

    var includeSpecialCharacters = window.confirm(
        "Would you like to include special characters in your password?");
    if (includeSpecialCharacters) {
        specialCharacter.forEach(function (special) {
            userChoices.push(special);
        });
    }

    var includeUpperCaseLetters = window.confirm(
        "Would you like to include UPPERCASELETTERS in your password?");
    if (includeUpperCaseLetters) {
        upperCase.forEach(function (upper) {
            userChoices.push(upper);
        }
        );
    }

    var includeLowerCaseLetters = window.confirm(
        "Would you like to include lowercaseletters in your password?");
    if (includeLowerCaseLetters) {
        lowerCase.forEach(function (lower) {
            userChoices.push(lower);
        });
    }

//IF USER DOES NOT MAKE ANY VALID SELECTIONS, TO RULE OUT AN UNDEFINED  
    if (userChoices.length === 0) {
        alert("Please make at least one valid selction");
        shufflePassowrd(passwordLength);
    }

// PW BEING RANDOMIZED BASED OFF OF ABOVE \prompt, confirm, & alert\ SELECTIONS
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * userChoices.length);
        password += userChoices[randomIndex];
    }
    return password;
}

// FUNCTION THAT WILL POPULATE PW FROM RANDOMIZER AND MAKE \generatePassword:true\ A WORKING FUNCTION
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// EVENT BEING ADDED THAT WILL /print/ PW INTO THE UI TEXTBOX THAT MEETS ALL USER CRITERIA
generateBtn.addEventListener("click", writePassword);

