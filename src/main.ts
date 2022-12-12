import './style/style.scss';


const darkMode = document.querySelector('#darkMode');
const lightMode = document.querySelector('#lightMode');
const yesBtn = document.querySelector('#acceptedBtn');
const noBtn = document.querySelector('#deniedBtn');

const gameDescText = 'Let the Game Begin!';
const gameDescription = document.querySelector('#gameDescription');

let playerName = '';

const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3'); 
const answer4Btn = document.querySelector('#answer4'); 

darkMode.addEventListener('click', backgroundDark);
lightMode.addEventListener('click', backgroundLight);

yesBtn.addEventListener('click', goToGame);
noBtn.addEventListener('click', nextTime);

document.querySelector('#startGameBtn').addEventListener('click', startGame);

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer); 
answer4Btn.addEventListener('click', checkAnswer); 

let currentQuestion = 0; 
let points = 0;

const questions = [
  {
    questionText: 'What is the capital of Sweden?', 
    answerOptions: [
      'Malmö',
      'Västerås',
      'Stockholm',
      'Göteborg'
    ], 
    correctAnswer: 'Stockholm',
  }, 
  {
    questionText: 'What is the capital of Morocco?', 
    answerOptions: [
      'Casablanca',
      'Rabat',
      'Marrakech',
      'Tangier'
    ], 
    correctAnswer: 'Rabat',
  },
  {
    questionText: 'What is the capital of France?', 
    answerOptions: [
      'Paris',
      'Marseille',
      'Strasbourg',
      'Lyon'
    ], 
    correctAnswer: 'Paris',
  },
  {
    questionText: 'Where is Spain?', 
    answerOptions: [
      'Africa',
      'Asia',
      'America',
      'Europa'
    ], 
    correctAnswer: 'Europa',
  },
  {
    questionText: 'Where is Tunisia?', 
    answerOptions: [
      'Africa',
      'Asia',
      'Europa',
      'America'
    ], 
    correctAnswer: 'Africa',
  },
  {
    questionText: 'What is the biggest town in Morocco?', 
    answerOptions: [
      'Rabat',
      'Casablanca',
      'Agadir',
      'Tangier'
    ], 
    correctAnswer: 'Casablanca',
  },
  {
    questionText: 'Which countries border to Turkey?', 
    answerOptions: [
      'Irak',
      'Italy',
      'Bulgaria',
      'Serbia'
    ], 
    correctAnswer: 'Irak, Bulgaria',
  },
  {
    questionText: 'Which country border to Portugal?', 
    answerOptions: [
      'Spain',
      'Morocco',
      'France',
      'United kingdom'
    ], 
    correctAnswer: 'Spain',
  },
  {
    questionText: 'What is the river in France called?', 
    answerOptions: [
      'Nilen',
      'Loire',
      'Elbe',
      'Main'
    ], 
    correctAnswer: 'Loire',
  },
  {
    questionText: 'What is the biggest town in the world?', 
    answerOptions: [
      'Tokyo',
      'New Dehli',
      'Jakarta',
      'Mumbai'
    ], 
    correctAnswer: 'tokyo ',
  }
];

document.querySelector ('#restartGameBtn').addEventListener('click', restartGame);

gameDescription.innerHTML = gameDescText;


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

function nextTime(){
  alert('Better luck next time, wish you all luck');
}

function startGame() {
  playerName = document.querySelector('#playerNameInput').value;
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  nextQuestion();
};

function checkAnswer(e){
const userAnswer = e.currentTarget.innerHTML;
const correctAnswer = questions[currentQuestion -1].correctAnswer;
if (userAnswer == correctAnswer) {
points++;
}else {
}
nextQuestion();
}

function nextQuestion() {
  if (currentQuestion >= questions.length) { 
    gameOver();
    return;
  }
questionTextDiv.innerHTML = questions[currentQuestion].questionText;
answer1Btn.innerHTML = questions[currentQuestion].answerOptions[0];
answer2Btn.innerHTML = questions[currentQuestion].answerOptions[1];
answer3Btn.innerHTML = questions[currentQuestion].answerOptions[2];
answer4Btn.innerHTML = questions[currentQuestion].answerOptions[3];

currentQuestion ++;
}

function restartGame(){
  document.querySelector('#gameOver').style.display ='none';
  document.querySelector('#questionContainer').classList.remove('hidden');
  currentQuestion = 0;
  points = 0;
  nextQuestion();
}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block'; 
  document.querySelector('#questionContainer').classList.add('hidden');
  document.querySelector('#pointsContainer').innerHTML = `Grattis ${playerName} du fick ${points} poäng!!`;
}

