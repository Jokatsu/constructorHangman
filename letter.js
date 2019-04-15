function Letter(letter) {
    this.letter = letter;
    //appear if user guessed it or it's not a character to guess
    this.appear = false;
    this.letterShows = function () {
        if (/[a-z1-9]/i.test(this.letter)===false) {
            // console.log("work");
            this.appear = true;
            return this.letter;
        }
        if (this.appear === false) {
            // console.log("no");
            return ' _ ';
        } else {
            return this.letter;
        }

    };

    this.show= function(guess){
        // console.log("yes"); 
        if(guess.toUpperCase()===this.letter.toUpperCase()){
            this.appear=true; 
            return true; 
        }else{
            return false; 
        }
    }
};

module.exports = Letter;

// var check = new Letter("!");

// console.log(check.letterShows(this.letter)); 
