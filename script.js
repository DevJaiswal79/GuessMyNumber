'use strict';

//What's the DOM and DOM Manipulation.
//DOM is Documented Object Model, structured representation of html documents.
//Allows javaScript to access html elements and styles to manupulate them.
//DOM tree from notes
//DOM methods are a part of Web API's
//Timer and fetch API's later on

/*
console.log(document.querySelector('.message').textContent);

// selecting and Manipulating event

document.querySelector(`.message`).textContent = `🎉Correct Number`;
console.log(document.querySelector('.message').textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
console.log(document.querySelector('.number').textContent);

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//# project1
//Handling Click Events
//Manipulating CSS
//Implementing the game logic...

let secretNumber = Math.trunc(Math.random() * 20) + 1; //gives a number between 1-20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number !`;
  } //when player wins
  else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number 🎉 !`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`; //manupulating the style
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💥 You lost the game !`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  //anonymous funtion
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
