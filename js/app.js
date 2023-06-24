
'use strict';

console.log('hello world');

let answerScore = 0;

let userName = prompt('What is your name?');
alert('Welcome to my site ' + userName + ' Let\'s play a guessing game, please answer yes/no OR y/n');

let questionOneGuess = prompt('Do I have any pets?').toLowerCase();
// console.log(questionOneGuess);
if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Correct!');
  answerScore++;
}
else if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Incorrect');
}
let questionTwoGuess = prompt('Do I have any siblings').toLowerCase();
// console.log(questionTwoGuess);
if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('Correct!');
  answerScore++;
}
else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Incorrect');
}
let questionThreeGuess = prompt('Have I ever traveled outside the country?').toLowerCase();
// console.log(questionThreeGuess);
if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Incorrect!');
}
else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Correct');
  answerScore++;
}
let questionFourGuess = prompt('Do I drink coffee?').toLowerCase();
// console.log(questionFourGuess);
if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('Correct!');
  answerScore++;
}
else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Incorrect');
}
let questionFiveGuess = prompt('Do I enjoy watching sports').toLowerCase();
// console.log(questionFiveGuess);
if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('Incorrect!');
}
else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Correct');
  answerScore++;
}
let questionSixAnswer = 1;

for(let tryNumber = 4; tryNumber > 0; tryNumber--){

  let questionSixGuess = prompt('How many languages do I speak?');

  if(~~questionSixGuess > questionSixAnswer){
    alert('Sorry, too high');
  } else if(~~questionSixGuess < questionSixAnswer){
    alert('Sorry, too low');
  } else if (~~questionSixGuess === questionSixAnswer){
    alert('You are correct!');
    answerScore++;
    break;
  }
  if(tryNumber === 1){
    alert('Sorry your attempts have been exhausted. The correct answer was 1');
  }
}

let questionSevenAnswer = ['sushi','tacos','salad'];

for(let tryNumber = 6; tryNumber > 0; tryNumber--){

  let questionSevenGuess = prompt('Name one of the last three dinners I prepared.').toLowerCase();

  for(let arrayIndex = 0; arrayIndex < questionSevenAnswer.length; arrayIndex++)
    if(questionSevenGuess === questionSevenAnswer[arrayIndex]){
      alert('That is correct!');
      answerScore++;
      tryNumber = 0;
      break;
    }
}
alert('Here are all the correct answers: ' + questionSevenAnswer[0]+ ' ' + questionSevenAnswer[1]+ ' '+ questionSevenAnswer[2]);

alert('Thank you, ' +userName+ ' for playing! Your final score was ' + answerScore + ' out of 7.');
