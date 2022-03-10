'use strict';

// grabbing the vistor's name
let userName = prompt('Hello, what is your name?');
// responding with an alert to greet the user
alert(`Welcome ${userName}! Please answer the following yes or no questions to learn more about me!`);

// ******* GUESSING GAME LOGIC **********

// // Question 1
// let answerOne = prompt('Do I have a daughter?').toUpperCase();

// if (answerOne === 'Y' || answerOne === 'YES') {
//   alert('You are correct!');
// } else if (answerOne === 'N' || answerOne === 'NO') {
//   alert('Sorry, you are incorrect');
// }

// // TODO: 4 Q's that take in a y/yes or n/no response

// // TODO: Question 6:
// // Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// // Indicates through an alert if the guess is “too high”

// // alert if the guess is “too low”.

// // It should give the user exactly four opportunities to get the correct answer.
// // After all attempts have been exhausted, tell the user the correct answer.
// let attempts = 4;
// let myNumber = 15;

// while (attempts) {
//   let userGuess = prompt('What number am I thinking of?');

//   if (userGuess > myNumber) {
//     alert('Too high!');

//   } else if (userGuess < myNumber) {
//     alert('Too low!');
//   } else if (+userGuess === myNumber) {
//     alert('You are correct!');
//     break;
//   }

//   attempts--;

//   if (attempts === 0) {
//     alert(`the correct answer was ${myNumber}!`);
//   }
// }



//TODO: Question 7:
// Add a 7th question that has multiple possible correct answers that are stored in an array.
let favBoyBands = ['backstreet boys', 'one direction', 'bts', 'fall out boys', 'take that'];
//                      0                 1              2        3               4
// Give the user 6 attempts to guess the correct answer.
let numberOfGuesses = 6;


while(numberOfGuesses){  // slow loop
  numberOfGuesses--;
  let boyBandGuess = prompt('Guess one of my favorite boy bands').toLowerCase();
      // boyBandGuess = bts
  for(let i = 0; i < favBoyBands.length; i++){  // fast loop
     if(boyBandGuess === favBoyBands[i]){
        alert(`OMG! Yes I love ${favBoyBands[i]}!`);
        numberOfGuesses = 0;
     }
  }

  // first iteration i = 0
 // if NSYNC === favBoyBands[0] -> alert
 // i = 1  NSYNC = favBB[1]
 // i = 2
}

alert(`Here were all of my possible favorite boybands: ${favBoyBands}`);
// The guesses will end once the user guesses a correct answer

// or they run out of attempts.

// Display all the possible correct answers to the user.

