'use strict';

let answerOne = prompt('Do I have a daughter?').toUpperCase();


if(answerOne === 'Y' || answerOne === 'YES'){
  alert('You are correct!');
} else if(answerOne === 'N' || answerOne === 'NO'){
  alert('Sorry, you are incorrect');
}
