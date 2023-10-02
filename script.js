const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionText = document.getElementById('question');
const answerText = document.getElementById('answer');
const audio = document.getElementById('audio');

    function toggleMute() {
      audio.muted = !audio.muted;
    }

let isMoved = false;

let questionIndex = 0; // Start at 0 to display the first question
const questions = [
  'Miss moko?',
  'Really?',
  'Really?',
  'Are you sure?',
  'Are you sure?',
  'Cute ba ako sa paningin mo?',
  'Cute ba ako sa paningin mo?',
  'thank youu! bwahahah!!!',
  'thank youu! bwahahah!!!',
  'love moko?',
  'love moko?',
  'Weh ba?',
  'Weh ba?',
  'Ayieeeeee!!',
  'Ayieeeeee!!'
];
let answers = [];

function changeQuestion(answer) {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    questionText.textContent = questions[questionIndex];
    answers.push(answer);
  } else if (questionIndex === questions.length - 1) {
    answers.push(answer);
    displayAnswers();
  }
}

function displayAnswers() {
  questionText.style.display = 'none';
  answerText.textContent = 'I miss you and I love you too!! ❤️❤️❤️';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
}

function showAnswer() {
  displayAnswers();
}

noButton.addEventListener('click', () => {
  if (!isMoved) {
    noButton.classList.add('move-right');
  } else {
    noButton.classList.remove('move-right');
  }
  isMoved = !isMoved;
});

yesButton.addEventListener('click', () => {
  if (questionIndex === 0) {
    questionText.textContent = questions[questionIndex];
    questionIndex++;
  } else if (questionIndex < questions.length) {
    changeQuestion('Yes');
  }
});

