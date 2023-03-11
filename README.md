# pw-scramblejam

## Description

Given the following instructions provided in the starter code (and some added on my end), I began the main script.js skeleton.


//STEPS:
//Get references to the #generate element

//take user choices and create password

//push user choices to own array and/or own string

//create password and randomize

//remember math.floor and math.random equation

//returnShufflePassword

//Write password to the #password input

//Add event listener to generate button



I created all of my variables and grouped together various strings, numbers, and special characters in their corresponding array.
*(Originally, my numeric values were not housed individually in double " s as numbers are not considered strings, but due to a bug later in my code double " were added around each number.) 


I worked with the code provided by the original developer, and my steps to to begin working on my code additions. 


I started by adding a conditional variable after a window prompt, making individualized code for randomzing specified characters, and working with message structure in alerts/prompts.



Over the course of my contribution to the starter code: I continued to add more conditional statements that were applicable to each array; I modified the message structure in the alert/prompt windows; I added concat to to then merge the arrays in the conditional statements, if chosen by the user; and I added strict equalities (which proved to not be needed in most areas where first implimented).

I tried to run my code and realized I didnt have a prompt for the user to add password length, as well as the windows not being proper confirm windows. This did not allow the me/user to decide which specific prefences for personalization were needed after password length. 
(It was during a class breakout session that a peer reminded me of "window.confirm" (he is referenced below). This helped me switch my prompts to confirm actions).

For a while things seemed to be going okay, yet my console was blank (in devTools),and I was not able to accpet all criteria without getting: "undefined". The code would only generate a password if I disagreed to adding any additional prefrences to my password. 

Another bug I encountered was I couldnt go back if my values were not between 8-128 characters

## License
MIT

## Contributions

Tutoring from Phillip Loy

Class' Discord "Lounge" Study-Group

Assistance was received from our class TA, Shawn on various occasions in post-class breakbout rooms, zoom session, and a debugging when my console would not load.

Joshua Dadbin, (class peer) assited with code de-bugging with window.prompt to window.confirm after 3/10 GitHub merge was not generating as expexted.


## Deploy Link
["Deploy Link"](link here)

## Refrences
["Password Special Characters"](https://owasp.org/www-community/password-special-characters)

["Stringing on Special Characters" - Video](https://youtu.be/PRmTHiwTvts)

["Generate element"](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

["Selecting Random Items from an Array"](https://css-tricks.com/snippets/javascript/select-random-item-array/)


## Assets

![alt](linkhere)