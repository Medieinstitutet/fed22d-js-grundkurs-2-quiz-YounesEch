/**********************************************************Import***************************************************************************************/
import './style/style.scss';
import { questions } from './array';
import { shuffle } from './utils';
/**********************************************************Variabler***************************************************************************************/
const darkMode = document.querySelector('#darkMode');
const lightMode = document.querySelector('#lightMode');
const yesBtn = document.querySelector('#acceptedBtn');
const noBtn = document.querySelector('#deniedBtn');

const gameDescText = 'Let the Game Begin!';
const gameDescription = document.querySelector('#gameDescription');

let playerName = '';

const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1Text');
const answer2Btn = document.querySelector('#answer2Text');
const answer3Btn = document.querySelector('#answer3Text');
const answer4Btn = document.querySelector('#answer4Text');

const questionCounter= document.querySelector('#counter');
const maxQuestions= 10;

let currentQuestion = 0; 
let points = 0;

/**********************************************************Event***************************************************************************************/

darkMode.addEventListener('click', backgroundDark);
lightMode.addEventListener('click', backgroundLight);

yesBtn.addEventListener('click', goToGame);
noBtn.addEventListener('click', nextTime);

document.querySelector('#startGameBtn').addEventListener('click', startGame);

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer); 
answer4Btn.addEventListener('click', checkAnswer); 


answer1Btn.addEventListener('click', nextQuestion);
answer2Btn.addEventListener('click', nextQuestion);
answer3Btn.addEventListener('click', nextQuestion);
answer4Btn.addEventListener('click', nextQuestion);


document.querySelector ('#restartGameBtn').addEventListener('click', restartGame);

gameDescription.innerHTML = gameDescText;

/**********************************************************Functions***************************************************************************************/
function backgroundDark(){
  document.body.classList.toggle('light_theme');
  darkMode.classList.toggle('display');
  lightMode.classList.remove('display');
}

function backgroundLight(){
  document.body.classList.remove('light_theme');
  lightMode.classList.toggle('hide');
  darkMode.classList.remove('hide');
}

function goToGame(){
  document.querySelector('#pageOne').style.display = 'none';
  document.querySelector('#pageTwo').style.display = 'block';
}

function nextTime() {
  alert('Better luck next time, wish you all luck');
}

function startGame() {
  playerName = document.querySelector('#playerNameInput').value;
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  document.querySelector('#questionContainer').style.display = 'block';
  document.body.style.backgroundImage ='none';
  tickingTime.classList.remove('hide');
  nextQuestion();
  timer = setInterval(myTimer,500);
}

const tickingTime = document.querySelector('.tickingTime');
const timer = document.getElementById('timer');
let sec = 60;

function myTimer() {
    timer.innerHTML = sec + ' sekunder';
    sec--;
    if (sec === 0) {
        clearInterval(timer);
        alert('Tyvärr tiden är slut!');
    }
}

function nextQuestion() {
  if (currentQuestion >= shuffle(questions).length) { 
    gameOver();
    return;
  }
  questionTextDiv.innerHTML = questions[currentQuestion].questionText;
  answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];
  answer4Btn.innerHTML = questions[currentQuestion].answerOptions[3];

  currentQuestion ++;
  questionCounter.innerHTML= `${currentQuestion}/${maxQuestions}`;
  }


function checkAnswer(e){
  const userAnswer = e.currentTarget.innerHTML;
  const correctAnswer = questions[currentQuestion -1].correctAnswer;
  if (userAnswer === correctAnswer){
    points++;
    document.body.classList.toggle('correct');
  }else if(points > 0){
    points--;
    document.body.classList.toggle('inCorrect');
  }
  console.log(points);
  setInterval(clearBackgroundColor,1000);
  }

  function clearBackgroundColor(){
    document.body.classList.remove('correct');
    document.body.classList.remove('inCorrect');
    
  }

function restartGame(){
  document.querySelector('#gameOver').style.display ='none';
  document.querySelector('#playerDetails').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'none';
  currentQuestion = 0;
  points = 0;
}

function gameOver() {
  tickingTime.classList.toggle('hide');
  document.querySelector('#gameOver').style.display = 'block'; 
  document.querySelector('#questionContainer').style.display = 'hidden';
  document.querySelector('#pointsContainer').innerHTML = `Grattis ${playerName} du fick ${points} poäng!!`;
  document.querySelector('#restartGameBtn').style.display = 'block';
  document.querySelector('#next').style.display = 'none';

}