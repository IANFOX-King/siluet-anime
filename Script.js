const characters = [
  { image: 'https://ibb.co.com/k2CVMVsp', answer: 'Beru' },
  { image: 'https://ibb.co.com/cSwqF9rJ', answer: 'Kokushibo' }
];

let currentIndex = 0;
let score = 0;

const imageElement = document.getElementById('character-image');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const questionNumber = document.getElementById('question-number');
const waBtn = document.getElementById('share-wa');

document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', nextCharacter);

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = characters[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Benar!';
    score++;
  } else {
    feedback.textContent = `Salah! Jawaban: ${characters[currentIndex].answer}`;
  }

  scoreDisplay.textContent = score;
  answerInput.value = '';
  document.getElementById('submit-btn').disabled = true;
}

function nextCharacter() {
  currentIndex++;
  if (currentIndex < characters.length) {
    updateGame();
  } else {
    feedback.textContent = `Game selesai! Skor akhir: ${score}/${characters.length}`;
    document.querySelector('.input-section').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
  }
}

function updateGame() {
  imageElement.src = characters[currentIndex].image;
  questionNumber.textContent = currentIndex + 1;
  feedback.textContent = '';
  document.getElementById('submit-btn').disabled = false;
}

updateGame();

const gameURL = window.location.href;
waBtn.href = `https://wa.me/?text=Coba%20main%20game%20Tebak%20Siluet%20Anime%20ini!%20Langsung%20main%20di%20${encodeURIComponent(gameURL)}`;
