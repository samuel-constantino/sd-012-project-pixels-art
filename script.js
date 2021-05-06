// cria cores aleatórias  
const generateRandomColor = () => {
  let randomColor;
  let randomR;
  let randomG;
  let randomB;
  do {
    randomR = Math.floor(Math.random() * 255);
    randomG = Math.floor(Math.random() * 255);
    randomB = Math.floor(Math.random() * 255);
  } while (randomColor === 'rgb(255, 255, 255)' || randomColor === 'rgb(0, 0, 0)');

  randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  return randomColor;
};

// cria paleta de cores
const elementColorPalette = document.querySelector('#color-palette');

for (let index = 0; index < 4; index += 1) {
  const newColor = document.createElement('div');
  newColor.className = 'color';
  if (index === 0) {
    newColor.style.backgroundColor = 'black';
  } else {
    newColor.style.backgroundColor = generateRandomColor();
  }
  elementColorPalette.appendChild(newColor);
}

// cria quadro de pixels
const elementPixelBoard = document.querySelector('#pixel-board');

function createBoardCollumns(newLine, quantityColumnns) {
  for (let column = 1; column <= quantityColumnns; column += 1) {
    const newCell = document.createElement('td');
    newCell.className = 'pixel';
    newLine.appendChild(newCell);
  }
}

function createBoard(quantityRows) {
  for (let row = 1; row <= quantityRows; row += 1) {
    const newLine = document.createElement('tr');
    elementPixelBoard.appendChild(newLine);
    createBoardCollumns(newLine, quantityRows);
  }
}
createBoard(5);

// adiciona cores em palette
// function addColorsInPalette() {
//   const elementsColor = document.querySelectorAll('.color');
//   const colorsList = ['black', 'blue', 'red', 'green'];
//   for (const key in colorsList) {
//     elementsColor[key].style.backgroundColor = colorsList[key];
//   }
// }
// addColorsInPalette();

// adiciona cor branca padrão aos pixels
function addColorWhiteInBoard() {
  const elementsPixel = document.querySelectorAll('.pixel');
  for (const pixel of elementsPixel) {
    pixel.style.backgroundColor = 'white';
  }
}
addColorWhiteInBoard();

// seleciona cor preta como padão inicial
function setColorSelected(color) {
  const elementsColor = document.querySelectorAll('.color');
  for (const value of elementsColor) {
    if (value.className === 'color selected') {
      value.className = 'color';
    }
    if (value.style.backgroundColor === color) {
      value.className = 'color selected';
    }
  }
}
setColorSelected('black');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const color = event.target.style.backgroundColor;
    setColorSelected(color);
  }
  if (event.target.classList.contains('pixel')) {
    let elementColorSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = elementColorSelected.style.backgroundColor;
  }
});

let btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', () => {
  addColorWhiteInBoard();
});

// refaz quantidade de pixels
function recreateBoard(number) {
  let rowBoards = pixelBoard.querySelectorAll('.row-board');
  // excluir elementos existentes
  for (let index = 0; index < rowBoards.length; index += 1) {
    pixelBoard.removeChild(rowBoards[index]);
  }
  // cria novamente os elementos com novo parâmetro
  createBoard(number);
};

let btnBoard = document.querySelector('#generate-board');
btnBoard.addEventListener('click', () => {
  let boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize < 5) {
    recreateBoard(5);
  } else if (boardSize > 50) {
    recreateBoard(50);
  } else {
    recreateBoard(boardSize);
  }
});
