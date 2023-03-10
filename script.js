// Assignment code here


//letter, number, special char array //

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var specialCharacter =  ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var specialChars = ["\U0020""\U0022", "\U0027",]

let showChars = function (){ for ( let i =0; )}

\\
\"

\'

//*





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);