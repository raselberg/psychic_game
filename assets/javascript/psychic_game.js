// Alpabet array used for random guesses 
var validLetters =
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];


// Var of losses,wins,guesses left, and guessed, all should show up in empty values or arrays.
var win= 0;
var losses= 0;
var guessesLeft= 10;
var guessedLetters= [];
var userGuesses = document.onkeyup;

// Random selection of computers guesses using Math.Floor and Math.random array/variable.
// Console log variables
var computerGuesses = validLetters[Math.floor(Math.random() * validLetters.length)];
    console.log (computerGuesses);


// On document.onkeup function places userGuesses variable to screen when key pressed
document.onkeyup = function(event){ 
    var userGuesses = event.key;

//validLetters goes through string where userGuesses and computerGuesses are equal to eachother
// wins will go up, with 8 guesses, and guess go into array. Then computerGuesses array guesses shows as well.
if (validLetters.indexOf(userGuesses) > -1){
    if (userGuesses === computerGuesses){
        win++;
        guessesLeft = 10;
        guessedLetters = [];
        computerGuesses = validLetters[Math.floor(Math.random() * validLetters.length)];{
            console.log(computerGuesses)
        }
    }


    if (userGuesses != computerGuesses) {
        guessesLeft --;
        guessedLetters.push(userGuesses);
        }
    }

    if (guessesLeft === 0){
        losses++;
        guessesLeft = 8;
        guessedLetters = [];
        computerGuesses = validLetters[Math.floor(Math.random() * validLetters.length)];{
            console.log(computerGuesses)
        }
    }

// What variables show on screen attatched to index.html
var html = 
    '<p><h2>Psychic Game</h2></p>'+
    '<p>Wins: ' + win + '</p>'+
    '<p>Losses: ' + losses + '</p>'+
    '<p>Guesses Remaining: ' + guessesLeft + '</p>'+
    '<p>Letters Guessed: ' + guessedLetters.join(', ') + '</p>';
document.querySelector("#game").innerHTML = html;
};