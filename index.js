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
    if (val === computerChoice.selection){
        console.log('\x1b[33m%s\x1b[0m', 'YOU WIN! LET\'S PLAY AGAIN');
        return reset();
    };
};
function question() {
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuess",
            message: "Choose a letter!"
        }
    ]).then(function (answer) {
        // If the user guesses the password...
        var guess = answer.letterGuess.toLowerCase();
        if (letterOptions.indexOf(guess) >= 0) {
            if (guessesSoFar.indexOf(guess) > 0) {
                console.log('\x1b[35m%s\x1b[0m', '\nYou\'ve already guessed ' + guess + '! Guess again! You have ' + turn + ' turns left');
                computerChoice.checkWord(guess);
                showProgress();
                turn--;
            }
            else if (guessesSoFar.indexOf(guess) < 0 && computerChoice.selection.indexOf(guess) >= 0) {
                guessesSoFar.push(guess);
                console.log('\x1b[36m%s\x1b[0m', '\nCORRECT!');
                computerChoice.checkWord(guess);
                showProgress();
            }
            else if (guessesSoFar.indexOf(guess) < 0 && computerChoice.selection.indexOf(guess) < 0) {
                computerChoice.checkWord(guess);
                console.log('\x1b[31m%s\x1b[0m', '\nINCORRECT!!!!' + ' You have '+ turn + ' turns left');
                guessesSoFar.push(guess);
                computerChoice.checkWord(guess);
                showProgress();
                turn--;
            }

        }
        else {
            console.log('\x1b[35m%s\x1b[0m', '\nThat\'s not a letter. Please input a leter. You have ' + turn + ' turns left');
            computerChoice.checkWord(guess);
            showProgress();
            turn--;
        }
        askQuestion();
    });
};
function reset(){
    guessesSoFar = [];
    turn = 8;
    changeComputerChoice();
    showProgress();
    askQuestion();
}

//recursive loop
var turn = 8;
function askQuestion (){
    if (turn >= 0){
        question();
    }
    else {
        console.log("You're out of turns! So....")
        console.log('\x1b[31m%s\x1b[0m', '\nYOU LOSE!!!!!');
    }
};
changeComputerChoice();
showProgress();
askQuestion();