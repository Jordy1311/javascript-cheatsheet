/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate input
    // if(isNaN(guess) || guess < min || guess > max) {
    //     setMessage(`Please enter a number between ${min} and ${max}`);
    // }
    // Better validation (gives the user more information about what they are doing wrong)
    if(isNaN(guess)) {
        setMessage(`You can't guess nothing!`, 'red');
    } else if (guess < min) {
        setMessage(`Your number was smaller than ${min}  ¯\\_(ツ)_/¯`, 'red');
    } else if (guess > max) {
        setMessage(`Your number was higher than ${max}  ¯\\_(ツ)_/¯`, 'red');
    } 

    // Check if won
    if(guess === winningNum) {
        // GAME OVER - WON
        gameOver(true, `${winningNum} is correct! You won!!`);
    } else {
        // Wrong number
        guessesLeft -=1;
        // Check guesses left
        if(guessesLeft === 0) {
            // GAME OVER - LOST
            gameOver(false, `Game over, you lost! The correct number was ${winningNum}.`);
            } else {
            // Game continues - answer wrong
            // Change border color
            guessInput.style.borderColor = 'red';
            // Tell user, wrong guess
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left!`, 'red');
            // Clear input
            guessInput.value = '';
        }
    }
});

// gameOver();
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border & text color
    guessInput.style.borderColor = color;
    message.style.color = color;
    // setMessage win
    setMessage(msg);
}

// setMessage();
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}