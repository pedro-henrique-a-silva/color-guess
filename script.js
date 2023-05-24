const pRgbColor = document.querySelector('#rgb-color');
const pAnswer = document.querySelector('#answer');
const pScore = document.querySelector('#score');
const buttonReset = document.querySelector('#reset-game');
const sectionColor = document.querySelector('#colors');
let score = 0;

const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const getRandomColor = () => {
  const red = generateRandomNumber(256);
  const green = generateRandomNumber(256);
  const blue = generateRandomNumber(256);
  return `(${red}, ${green}, ${blue})`;
};

const updateScore = () => {
  pScore.innerText = `Placar: ${score}`;
};

const chooseColorGuess = () => {
  const colors = document.querySelectorAll('#colors .ball');
  const colorGuess = generateRandomNumber(colors.length);
  pRgbColor.innerHTML = colors[colorGuess].style.backgroundColor;
};

const createDivColors = () => {
  for (let index = 0; index < 6; index += 1) {
    const divColor = document.createElement('div');
    const randomColor = getRandomColor();
    divColor.classList.add('ball');
    divColor.style.backgroundColor = `rgb${randomColor}`;
    sectionColor.appendChild(divColor);
  }
  chooseColorGuess();
};

const resetGame = () => {
  sectionColor.innerHTML = '';
  createDivColors();
  pAnswer.innerText = 'Escolha uma cor';
};

const guessVerify = (element) => {
  const bgToGuess = pRgbColor.innerText;
  const bgColorGuessed = element.style.backgroundColor;

  if (bgToGuess === bgColorGuessed) {
    pAnswer.innerText = 'Acertou!';
    score += 3;
  } else {
    pAnswer.innerText = 'Errou! Tente novamente!';
    score -= 3;
  }
  // resetGame();
  updateScore();
};

const eventColor = () => {
  sectionColor.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball')) {
      guessVerify(event.target);
    }
  });
};

const eventResetGame = () => {
  buttonReset.addEventListener('click', () => {
    resetGame();
  });
};

window.onload = () => {
  createDivColors();
  eventColor();
  eventResetGame();
};
