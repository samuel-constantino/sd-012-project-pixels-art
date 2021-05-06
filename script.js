// cria quadro
const pixelBoard = document.querySelector('#pixel-board');

function creatingPixelDivsCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    row.appendChild(pixel);
  }
}

function creatingPixelDivs(linhas) {
  for (let row = 1; row <= linhas; row += 1) {
    const rowBoard = document.createElement('div');
    rowBoard.className = 'row-board';
    pixelBoard.appendChild(rowBoard);
    creatingPixelDivsCollumns(rowBoard, linhas);
  }
}
creatingPixelDivs(5);

// adiciona cores em palette
function addColorsInPalette() {
  const elementsColor = document.querySelectorAll('.color');
  const colorsList = ['black', 'blue', 'red', 'green'];
  for (const key in colorsList) {
    elementsColor[key].style.backgroundColor = colorsList[key];
  }
}
addColorsInPalette();

// adiciona cor branca padrão aos pixels
function addColorWhiteInBoard() {
  const elementsPixel = document.querySelectorAll('.pixel');
  for (const pixel of elementsPixel) {
    pixel.style.backgroundColor = 'white';
  }
}
addColorWhiteInBoard();

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
  creatingPixelDivs(number);
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
