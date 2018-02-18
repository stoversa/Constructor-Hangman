var Letter = require("./letter");
//Depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess:
function Word(){
    
    this.letters = []; //An array of new Letter objects representing the letters of the underlying word
    this.populateWord = function(character){
        this.letters.push(new Letter(character));
    };
    this.runString = function(){
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        this.returnChar();
    };
    this.checkWord = function (character){
        //A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)
        this.check();
    };
}

module.exports = Word;