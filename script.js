// adiciona cores em palette
function addColorsInPalette() {
  const elementsColor = document.querySelectorAll('.color');
  const colorsList = ['black', 'blue', 'red', 'green'];
  for (let key in colorsList) {
    elementsColor[key].style.backgroundColor = colorsList[key];
  }
}
addColorsInPalette();

function addColorInBoard() {
  const elementsPixel = document.querySelectorAll('.pixel');
  for (let pixel of elementsPixel) {
    pixel.style.backgroundColor = 'white';
  }
}
addColorInBoard();

function setColorSelected(color) {
  let elementsColor = document.querySelectorAll('.color');
  for (let value of elementsColor) {
    if (value.className === 'color selected') {
      value.className = 'color'
    }
    if (value.style.backgroundColor === color) {
      value.className = 'color selected';
    }
  }
}
setColorSelected('black');

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    let color = event.target.style.backgroundColor;
    setColorSelected(color);
  }
	if (event.target.classList.contains('pixel')) {
		let elementColorSelected = document.querySelector('.selected');
		event.target.style.backgroundColor = elementColorSelected.style.backgroundColor;
  }
});
