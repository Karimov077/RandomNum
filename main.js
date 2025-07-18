document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 7;
    
    const guessInput = document.getElementById("user-guess");
    const guessButton = document.getElementById("guess-btn");
    const retryButton = document.querySelector(".box__actions--retry--button");
    const message = document.querySelector(".box__note--text");
    const guessLimitText = document.querySelector(".box__limit--text");
    const numberDisplay = document.querySelector(".box--items-number");
    
    guessButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (attempts > 0) {
        let userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          message.textContent = "Please enter a number between 1 and 100!";
          return;
        }
        
        attempts--;
        guessLimitText.textContent = `Number of guesses: ${attempts}`;
        
        if (userGuess === randomNumber) {
          message.textContent = "Congratulations! You found the number!";
          numberDisplay.textContent = randomNumber;
          guessInput.disabled = true;
          guessButton.disabled = true;
        } else if (userGuess > randomNumber) {
          message.textContent = "Enter a smaller number!";
        } else {
          message.textContent = "Enter a larger number!";
        }
        
        if (attempts === 0 && userGuess !== randomNumber) {
          message.textContent = `Game over! The number was ${randomNumber}`;
          numberDisplay.textContent = randomNumber;
          guessInput.disabled = true;
          guessButton.disabled = true;
        }
      }
    });
    
    retryButton.addEventListener("click", function () {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 7;
      guessInput.value = "";
      guessInput.disabled = false;
      guessButton.disabled = false;
      message.textContent = "Start guessing...";
      guessLimitText.textContent = "Number of guesses: 7";
      numberDisplay.textContent = "?";
    });
  });
  