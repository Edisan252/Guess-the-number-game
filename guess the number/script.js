let randomNumber = Math.floor(Math.random() * 100) + 1;
    let chances = 10;

    function checkGuess() {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        const resultText = document.getElementById('result');
        const chancesLeft = document.getElementById('chances');

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultText.textContent = 'Please enter a valid number between 1 and 100.';
        } else {
            chances--;
            chancesLeft.textContent = chances;

            if (userGuess === randomNumber) {
                resultText.textContent = 'Congratulations! You guessed the correct number!';
                resultText.style.color = 'green';
                document.getElementById('userGuess').setAttribute('disabled', 'true');
            } else if (chances === 0) {
                resultText.textContent = `Game over! The number was ${randomNumber}.`;
                resultText.style.color = 'red';
                document.getElementById('userGuess').setAttribute('disabled', 'true');
            } else {
                const hint = userGuess < randomNumber ? 'higher' : 'lower';
                resultText.textContent = `Try again! Guess a ${hint} number.`;
                resultText.style.color = 'black';
            }
        }
    }