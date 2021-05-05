window.onload = () => {
  // adiciona cores em palette
  function addColorsInPalette() {
    let elementColors = document.querySelectorAll('.color');
    let colorsList = ['black', 'blue', 'red', 'green'];
    for (let key in colorsList) {
      elementColors[key].style.backgroundColor = colorsList[key];
    }
  }
  addColorsInPalette();
}
