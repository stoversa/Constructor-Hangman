var Letter = require("./letter");
//Depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess:
function Word(currentWord){
    this.selection = currentWord;
    this.letters = []; //An array of new Letter objects representing the letters of the underlying word
    this.populateLetters = function(){
        var array = this.selection.split("");
        var letters = this.letters
        array.forEach(function (v) {
            letters.push(new Letter(v))
        });
    }
    this.runString = function(){
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        var progress = "";
        var letters = this.letters;
        var word = this.selection;
        for (var i = 0; i < letters.length; i++){
            progress += letters[i].returnChar();
        }
        return progress;
    };
    this.checkWord = function (character){
        //A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)
        this.letters.forEach(v => v.check(character));
    };
}

module.exports = Word;