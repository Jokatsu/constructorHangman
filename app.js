var inquirer = require("inquirer");
var Word = require("./word.js");
var roundCount = 0;
var wordBank=["Hello, World!", "Who Dat Boy", "You just got Played"]; 
var wordNumber=Math.floor(Math.random() * wordBank.length); 
 

var pickedWord = new Word(wordBank[wordNumber]);
// console.log(pickedWord.display());
// console.log(pickedWord.answers); 
// console.log(pickedWord.letterArr);
function round() {
    roundCount++;
    if (pickedWord.lives > 0) {
        if (pickedWord.word !== pickedWord.letterArr.join("")) {
            // console.log(pickedWord.letterArr.join(""));
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Guess a letter!",
                        name: "choice",
                    }

                ]).then(function (input) {
                    console.log("\n" + pickedWord.userGuess(input.choice.toUpperCase()).join(" ") + "\n");
                    console.log(`\nGuessed Letters: ${pickedWord.guessedWords.join(", ")}\n`)
                    round();
                })
        } else {
            console.log("-----------------------------------\n");
            console.log(`YOU HAVE WON\nIt Took You ${roundCount} turns to win\n`);
            console.log("-----------------------------------\n");
            restartGame();
        }
    } else {
        console.log("-----------------------------------\n");
        console.log("You have Lost\n");
        console.log("-----------------------------------\n");
        restartGame();
   }
}

console.log(pickedWord.letterArr.join(" ")); 
console.log("PRESS ANY LETTER OR NUMBER AND ENTER");
round();

function restartGame() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Do you want to play again?",
                name: "try",
                default:true,
            }

        ]).then(function (again) {
           if(again.try){
               roundCount=0;
               pickedWord.lives=6; 
               pickedWord.guessedWords=[];
               pickedWord=new Word(wordBank[wordNumber]);
               round();
           }
        })
}