class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split("");
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = "playing";
    }
    
    get puzzle () {
        let puzzle = "";
        this.word.forEach(letter => {
            (this.guessedLetters.includes(letter) || letter === " ") ? puzzle += letter : puzzle += "*";
        });
        return puzzle;
    }

    get statusMessage () {
        if(this.status==="playing"){
            return `Guesses left: ${this.remainingGuesses}`;
        } else if(this.status==="failed") {
            return `Nice try! The word was "${this.word.join("")}".`;
        } else if(this.status==="finished") {
            return "Great work! You guessed the word."
        }
    }

    makeGuess (letter) {
        letter = letter.toLowerCase();
        if(!this.guessedLetters.includes(letter)){
            this.guessedLetters.push(letter);
            if(!this.word.includes(letter)) {
                this.remainingGuesses--;
            }
        }
        console.log(this.checkStatus());
    }

    checkStatus () {
        if(this.word.join("")===this.puzzle) {
            this.status = "finished";
        } else if (this.remainingGuesses===0) {
            this.status="failed";
        }
        return this.status;
    }
}