// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
var winNum = Math.floor(Math.random() * 100);
console.log("Winning Number:", winNum);
var count = 7;

const highLow = () => {
  count--
  let guess = document.getElementById("userGuess").value;
  console.log("User Guess: ", guess)
  document.getElementById("guesses").innerHTML = count
  console.log("Turns Left:", count);
  let numGuess = parseInt(guess);
  if(guess > 0 && guess < 101){
    if(guess == winNum && count === 7){
      setTimeout(function () {
        alert("First Try?! You must be psychic!")
      }, 350);
      // location.reload();
    }
    else if(numGuess === winNum){
      setTimeout(function () {
        alert("You Win!")
      }, 350);
      // location.reload();
    }
    else if(count === 0){
      setTimeout(function () {
        alert("You Lose!")
      }, 350);
      // location.reload();
    }
    else if(numGuess < winNum){
      setTimeout(function () {
        alert("Higher")
      }, 350);
    }
    else if(numGuess > winNum){
      setTimeout(function () {
        alert("Lower")
      }, 350);
    }
  }
  else {
    setTimeout(function () {
      alert("Please enter a number between 1 and 100")
    }, 350);
  }
}
