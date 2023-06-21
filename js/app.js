'use strict';

console.log('hello world');

let userName = prompt('What is your name?');
alert('Welcome to my site ' + userName + ' Let\'s play a guessing game, please answer yes/no OR y/n');

let questionOneGuess = prompt('Do I have any pets?').toLowerCase();
let questionTwoGuess = prompt('Do I have any siblings').toLowerCase();
let questionThreeGuess = prompt('Have I ever traveled outside the country?').toLowerCase();
let questionFourGuess = prompt('Do I drink coffee?').toLowerCase();
let questionFiveGuess = prompt('Do I enjoy watching sports').toLowerCase();

if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Correct!');
}
else if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Incorrect');
}
if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('Correct!');
}
else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Incorrect');
}
if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Incorrect!');
}
else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Correct');
}
if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('Correct!');
}
else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Incorrect');
  if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
    alert('Incorrect!');
  }
  else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
    alert('Correct');
  }
}
