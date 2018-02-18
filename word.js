var Letter = require("./letter");
//Depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess:
function Word(currentWord){
    this.word = currentWord.split("");
    this.letters = []; //An array of new Letter objects representing the letters of the underlying word
    this.addLetter = function () {
        var array = this.letters;
        this.word.forEach(function (v){
            array.push(new Letter(v));
        })
    }
    this.runString = function(){
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        this.letters.forEach(v => v.returnChar());
    };
    this.checkWord = function (character){
        //A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)
        this.letters.forEach(v => v.check());
    };
}

module.exports = Word;