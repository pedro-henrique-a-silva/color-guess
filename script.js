const pRgbColor = document.querySelector('#rgb-color')
const sectionColor = document.querySelector('#colors');

const generateRandomNumber = (number) => Math.floor(Math.random() * (number));

const getRandomColor = () => {
  const red = generateRandomNumber(256);
  const green = generateRandomNumber(256);
  const blue = generateRandomNumber(256);
  return `(${red}, ${green}, ${blue})`;
};

const chooseColorGuess = () => {
  const colors = document.querySelectorAll('#colors .ball');
  const colorGuess = generateRandomNumber(colors.length);
  pRgbColor.innerHTML = colors[colorGuess].style.backgroundColor;
}

const createDivColors = () => {
  for (let index = 0; index < 6; index += 1) {
    const divColor = document.createElement('div');
    const randomColor = getRandomColor()
    divColor.classList.add('ball');
    divColor.style.backgroundColor = `rgb${randomColor}`;
    sectionColor.appendChild(divColor);
  }
  chooseColorGuess();
};



window.onload = () => {
  createDivColors();
  
}