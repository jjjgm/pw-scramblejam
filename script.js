// Assignment code here

// Arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":",
    ";", "<", "=", ">", "?", "@", "[", "^", "_", "|", "~"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//ask user for choices
function generatePassword() {
    var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert("Your Password length must be between 8 and 128 characters");
        generatePassword();
    }
   return shufflePassword(passwordLength);
}
// function for password
function shufflePassword(passwordLength) {
    var userChoices = [];

    var includeNumbers = window.confirm(
        "Would you like to include numbers in your password?");
    if (includeNumbers) { number.forEach(function (num) {
        userChoices.push(num);
    });
        //userChoices = userChoices.push(number);
    }

    var includeSpecialCharacters = window.confirm(
        "Would you like to include special characters in your password?");
    if (includeSpecialCharacters) {
        specialCharacter.forEach(function (special) {
            userChoices.push(special);
        });
        //userChoices = userChoices.push(specialCharacter);
    }

    var includeUpperCaseLetters = window.confirm(
        "Would you like to include UPPERCASELETTERS in your password?");
    if (includeUpperCaseLetters) {
        specialCharacter.forEach(function (upper) {
            userChoices.push(upper);
        });
        //userChoices = userChoices.push(upperCase);
    }

    var includeLowerCaseLetters = window.confirm(
        "Would you like to include lowercaseletters in your password?");
    if (includeLowerCaseLetters) {
        specialCharacter.forEach(function (lower) {
            userChoices.push(lower);
        });
        //userChoices = userChoices.push(lowerCase);
    }

    if (userChoices.length === 0) {
        alert("Please make at least one valid selction");
        shufflePassowrd(passwordLength);
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * userChoices.length);
        password += userChoices[randomIndex];
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//Add event listener to generate button

generateBtn.addEventListener("click", writePassword);





//take user choices and create password
//push user choices to own array and/or own string
//create password and randomize
//remember math.floor and math.random equation
//returnShufflePassword

//Random Item Selection
/* var randomUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
var randomSpecial = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
var randomNumber = number[Math.floor(Math.random() * number.length)];
var randomLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];*/
//buttons.forEach(function(button)) {button.addEventListner("click", grabButtonData);})
//* function clearChoices( userChoices ="";password ="";}function generatePassword ()