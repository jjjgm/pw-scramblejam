// Assignment code here


// Arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":",
    ";", "<", "=", ">", "?", "@", "[", "^", "_", "|", "~"]

//Random Item Selection
var randomUpper = upperCase[Math.floor(Math.random()*upperCase.length)];
var randomSpecial = specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
var randomNumber = number[Math.floor(Math.random()*number.length)];
var randomLower = lowerCase[Math.floor(Math.random()*lowerCase.length)];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    //ask user for choices
window.prompt("Would you like to include numbers in your password?");

let user = 

if (answer === "yes" ) { 
    console.log("Would you like to include special characters in your password?");
} //if yes code insert here when ready//
else if (ans)

}
    //take user choices and create password

    //push user choices to own array and/or own string
    //create password and randomize
    //remember math.floor and math.random equation
    //
    returnShufflePassword


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





/*

let user = 
switch (user) { 
    case number: ("Yes", "Y", "yes");
    break;
    case specialCharacter: ("Yes", "Y", "yes");
    break;
    case lowerCase+upperCase: ("Yes", "Y", "yes");
    break;
    default: prompt.alert("I'm sorry that is not a valid response. Please enter 'Yes' or 'No' to proceed.")
        //code to execute if user enters invalid response
        break;
} 
*/
