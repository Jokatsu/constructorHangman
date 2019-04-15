var Letter = require("./letter.js");

function Word(string) {
    this.lives = 6;
    this.guessedWords = [];
    this.word = string.toUpperCase();
    this.letterArr = this.word.split("").map(function (letter) {
        var letterDis = new Letter(letter);
        return letterDis.letterShows();
    });

    this.checkArr = this.word.split("");

    // this.answers= this.word.split(""); 

    this.display = function () {
        return this.letterArr.join(" ")
    }

    this.userGuess = function (guess) {
        for (var j = 0; j < this.letterArr.length; j++) {
            // console.log(this.letterArr[j]); 
            var show = new Letter(this.checkArr[j]);
            // console.log(show.show(guess));
            if (show.show(guess) === true) {
                for (var i = 0; i < this.checkArr.length; i++) {
                    if (this.checkArr[i] === guess) {
                        // console.log(this.checkArr);
                        this.letterArr[i] = guess;
                    }
                }
            }
        }
        if (this.checkArr.indexOf(guess) === -1 && this.guessedWords.indexOf(guess) === -1) {
            console.log("-----------------------------------");
            console.log("Sorry, not a correct input");
            this.lives--;
            console.log("\nYou have "+ this.lives+ " lives left"); 
            console.log("-----------------------------------\n");
            // console.log(this.lives);
            this.guessedWords.push(guess)
        }else if (this.guessedWords.indexOf(guess) === -1) {
            console.log("-----------------------------------");
            console.log("Correct guess");
            console.log("\nYou have "+ this.lives+ " lives left"); 
            console.log("-----------------------------------\n");
            this.guessedWords.push(guess)
            // console.log(this.guessedWords);
        } else {
            console.log("-----------------------------------\n");
            console.log("You already guessed that word!\n");
            console.log("-----------------------------------\n");
        }

        return this.letterArr;
    }
}

// }
//     if(this.checkArr.indexOf(guess)!== -1){
//         var arrStr= this.letterArr.join("");
//         var newArr= arrStr.replace(/[guess]/gi, guess); 
//         console.log("yes");
//         console.log(newArr); 
//         console.log(arrStr); 
//         return newArr; 
//     }else{
//         console.log("no"); 
//         return newArr; 
//     }
// }
// }



// var yes= new Word("Hello World!"); 
// var hiddenWord=yes.display(); 
// console.log(hiddenWord); 
// console.log(yes.answers); 

// yes.displa

module.exports = Word;