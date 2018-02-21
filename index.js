/*Contains the logic for the course of the game
Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses
*/
const inquirer = require('inquirer');
var Word = require("./word");
var wordChoices = ["brontosaurus", "echidna", "eagle", "dolphin", "cheetah", "rhinoceros", "panda", "orangutan"];
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesSoFar = [];
var computerChoice;
function changeComputerChoice () {
    var wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    computerChoice = new Word(wordSelection);
    computerChoice.populateLetters();
};
function showProgress(){
    var val = computerChoice.runString();
    console.log(val + "\n");
};

changeComputerChoice();
showProgress();

inquirer.prompt([
    {
        type: "input",
        name: "letterGuess",
        message: "Choose a letter!"
    }
]).then(function (answer) {
    // If the user guesses the password...
    var guess = answer.letterGuess.toLowerCase();
    if (letterOptions.indexOf(answer.letterGuess) >= 0) {
        if (guessesSoFar.indexOf(answer.letterGuess) < 0){
            console.log('\x1b[36m%s\x1b[0m', '\nCORRECT!');
            computerChoice.checkWord(answer.letterGuess);
            showProgress();
        }
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', '\nINCORRECT!');
    }
});