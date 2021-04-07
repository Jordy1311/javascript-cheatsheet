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
        setMessage(`Your number was smaller than ${min}!  ¯\\_(ツ)_/¯`, 'red');
    } else if (guess > max) {
        setMessage(`Your number was higher than ${max}  ¯\\_(ツ)_/¯`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // setMessage win
        setMessage(`${winningNum} is correct! You win!!`, 'green');
    } else {

    }
});

// setMessage();
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}