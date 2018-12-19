const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

const game = new Hangman("Cat city", 2);

const renderGame = () => {
    puzzleEl.innerText = game.puzzle;
    guessesEl.innerText = game.statusMessage;
}

renderGame();

window.addEventListener("keypress", (e) => {
    if(game.checkStatus()==="playing"){
        const guess = String.fromCharCode(e.charCode);
        game.makeGuess(guess);
        renderGame();
    }
})