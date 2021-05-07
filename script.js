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
    newCell.style.backgroundColor = 'white';
    newLine.appendChild(newCell);
  }
}

function createBoard(quantityRows) {
  for (let row = 1; row <= quantityRows; row += 1) {
    const newLine = document.createElement('tr');
    newLine.className = 'row-board';
    elementPixelBoard.appendChild(newLine);
    createBoardCollumns(newLine, quantityRows);
  }
}
createBoard(5);

// adiciona cor branca padrão aos pixels
function addColorWhiteInBoard() {
  const elementsPixel = document.querySelectorAll('.pixel');
  for (const pixel of elementsPixel) {
    pixel.style.backgroundColor = 'white';
  }
}
addColorWhiteInBoard();

// da para otimizar, fazendo a verificação com 'event' dentro do próximo evento document.
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

// adiciona evento de click ao documento para detectar clicks na classe color
document.addEventListener('click', (event) => {
  // selecionar a cor na paleta
  if (event.target.classList.contains('color')) {
    const color = event.target.style.backgroundColor;
    setColorSelected(color);
  }
  // pintar pixel no quadro
  if (event.target.classList.contains('pixel')) {
    const elementColorSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = elementColorSelected.style.backgroundColor;
  }
});

// adiciona evento de limpar board ao clicar em botão
const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', () => {
  addColorWhiteInBoard();
});

function removeRows(){
  const pixelBoard = document.querySelector('#pixel-board');
  const rowBoards = pixelBoard.querySelectorAll('.row-board');
  for (let index = 0; index < rowBoards.length; index += 1) {
    pixelBoard.removeChild(rowBoards[index]);
  }
}

// refaz quantidade de pixels
function recreateBoard(boardSize) {
  console.log(boardSize)
  if (boardSize === '' || boardSize <= 0) {
    alert('Board inválido!');
  } else if (boardSize < 5) {
    removeRows();
    createBoard(5);
  } else if (boardSize > 50) {
    removeRows();
    createBoard(50);
  } else {
    removeRows();
    createBoard(boardSize)
  }
};

// adiciona eventos
document.addEventListener('click', (event) => {
  if (event.target.id === 'generate-board') {
    const boardSize = document.querySelector('#board-size').value;
    console.log(boardSize)
    recreateBoard(boardSize);
  }
});
